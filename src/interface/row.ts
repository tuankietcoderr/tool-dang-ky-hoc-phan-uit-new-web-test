interface IRow {
  maLop: string;
  tenMonHoc: string;
  tenGiangVien: string;
  soTinChi: number;
  isThucHanh: boolean;
  thu: string;
  tiet: string;
  phongHoc: string;
}

export interface IRowOnlyId {
  id: string;
  maLop: string;
}

export default IRow;
