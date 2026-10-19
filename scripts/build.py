#!/usr/bin/env python3
"""Build public per-state board files from the master sheet export.
Usage: build.py master.xlsx   (run from repo root)
Only public-safe fields are emitted. Vendor, internal IDs, rights notes never leave the sheet.
Publish rule: has coordinates + photo + QA_Status != 'Rejected' (override: column 'Publish' = 'N' hides, 'Y' forces)."""
import sys,re,json,datetime,collections,os,openpyxl
POL="e_improve:outdoor:40,e_vibrance:30,e_sharpen:80,w_900,q_auto,f_auto"
def polish(u): return u.replace("/image/upload/","/image/upload/%s/"%POL,1)
ws=openpyxl.load_workbook(sys.argv[1])['Billboards']
allr=list(ws.iter_rows(values_only=True)); hdr=[str(h or '').strip().lower() for h in allr[0]]; rows=allr[1:]
PUB=hdr.index('publish') if 'publish' in hdr else None  # optional column; blank = publish
G=collections.defaultdict(dict)
for r in rows:
    st=(r[20] or '').replace('.','').strip().upper()
    if not st or not (r[23] and r[24]): continue
    m=re.search(r'"(https://(?:res\.cloudinary\.com|ejbillboards\.github\.io)[^"]+)"',str(r[0] or ''))
    if not m: continue
    if (r[89] or '')=='Rejected': continue
    if PUB is not None and str(r[PUB] or '').strip().upper() in ('N','NO'): continue
    lat,lon=round(float(r[23]),4),round(float(r[24]),4)
    g=G[st].setdefault((lat,lon),{"ids":[],"area":r[25] or r[59] or '',"city":r[59] or '',"loc":r[15] or '',"types":set(),"sizes":set(),"rate":None,"photo":polish(m.group(1)),"lat":lat,"lon":lon})
    g["ids"].append(r[22]); 
    if r[5]: g["types"].add(r[5].replace(' LED',''))
    if r[3]: g["sizes"].add(str(r[3]))
    if isinstance(r[74],(int,float)) and r[74]>0: g["rate"]=max(g["rate"] or 0,int(r[74]))
os.makedirs('states',exist_ok=True)
today=datetime.date.today().isoformat(); index={"schema":1,"updated":today,"states":{}}
for st,d in sorted(G.items()):
    b=[]
    for g in d.values():
        ids=sorted(i for i in g["ids"] if i and 'PENDING' not in i) or sorted(g["ids"])
        b.append({"id":ids[0],"faces":len(g["ids"]),"area":g["area"],"city":g["city"],"loc":g["loc"],"types":sorted(g["types"]),"sizes":sorted(g["sizes"]),"rate":g["rate"],"photo":g["photo"],"lat":g["lat"],"lon":g["lon"]})
    if st=="MX":
        for x in b: x["intl"]=True
    b.sort(key=lambda x:x["id"])
    json.dump({"schema":1,"state":st,"updated":today,"count":len(b),"boards":b},open(f'states/{st}.json','w'),separators=(',',':'),ensure_ascii=False)
    index["states"][st]={"file":f"states/{st}.json","count":len(b)}
index["total"]=sum(v["count"] for v in index["states"].values())
json.dump(index,open('index.json','w'),indent=1)
print(index)
