import Actions from './actions';

export interface IMainReducer {
  isReady: boolean;
  isLoading?: boolean;

  info: IMainInfo;
}

export type ActionType = ReturnType<typeof Actions>;
export type IAllReducerProps = {
  main: IMainReducer;

  [name: string]: any;
};

//默认是全部的属性,可以自定义
export type IProps = IAllReducerProps & ActionType;

export type ITradeInfoProps = {};
export type ITradeInfoState = {};

export type ICustomInfoProps = {};
export type ICustomInfoState = {};

export type IShopInfoProps = {};
export type IShopInfoState = {};

export type IGoodsProps = {};
export type IGoodsState = {};

export interface IMainInfo {
  no?: string;
  time?: string;
  name?: string;
  [k: string]: any;
}
