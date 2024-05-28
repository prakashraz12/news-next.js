export const numsObject: { [key: string]: string } = {
  "0": "०",
  "1": "१",
  "2": "२",
  "3": "३",
  "4": "४",
  "5": "५",
  "6": "६",
  "7": "७",
  "8": "८",
  "9": "९",
};

export const neplaiMonthsMap: { [key: string]: string } = {
  Baisakh: "बैशाख",
  Jestha: "जेठ",
  Asar: "असार",
  Shrawan: "साउन",
  Bhadra: "भदौ",
  Aswin: "असोज",
  Kartik: "कार्तिक",
  Mangsir: "मंसिर",
  Poush: "पुस",
  Magh: "माघ",
  Falgun: "फागुन",
  Chaitra: "चैत",
};

export const nepaliWeekend:{[key:string]:string}={
  "Sunday": "आइत",
  "Monday": "सोम",
  "Tuesday": "मंगल",
  "Wednesday": "बुध",
  "Thursday": "बिहि",
  "Friday": "शुक्र",
  "Saturday": "शनि",
}

export interface ProvinceProps{
  label: string;
  order:number
}
export const province:ProvinceProps[] = [
  {
    label: "कोशी प्रदेश",
    order: 1,
  },
  {
    label: "मधेश प्रदेश",
    order: 2,
  },
  {
    label: "बागमती प्रदेश",
    order: 3,
  },
  {
    label: "गण्डकी प्रदेश",
    order: 4,
  },
  {
    label: "लुम्बिनी प्रदेश",
    order: 5,
  },
  {
    label: "कर्णाली प्रदेश",
    order: 6,
  },
  {
    label: "सुदूरपश्चिम प्रदेश",
    order: 7,
  },
];

export const formats:string[] = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
]

export const modules ={
  toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
}


