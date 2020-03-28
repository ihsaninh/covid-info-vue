export const fieldsId = [
  {
    key: 'FID',
    label: 'Prov ID',
    sortable: true
  },
  {
    key: 'Provinsi',
    label: 'Provinsi',
    sortable: true
  },
  {
    key: 'Kasus_Posi',
    label: 'Positif',
    sortable: true
  },
  {
    key: 'Kasus_Semb',
    label: 'Sembuh',
    sortable: true
  },
  {
    key: 'Kasus_Meni',
    label: 'Meninggal',
    sortable: true
  }
]

export const fieldsGlobal = [
  {
    key: 'OBJECTID',
    label: 'ID Negara',
    sortable: true
  },
  {
    key: 'Country_Region',
    label: 'Nama Negara',
    sortable: true
  },
  {
    key: 'Confirmed',
    label: 'Positif',
    sortable: true
  },
  {
    key: 'Recovered',
    label: 'Sembuh',
    sortable: true
  },
  {
    key: 'Deaths',
    label: 'Meninggal',
    sortable: true
  },
]

export const thousandFormatter = (num) => {
  if(num){
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return num;
};
