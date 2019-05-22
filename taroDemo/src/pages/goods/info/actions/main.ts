import {Command} from '../constant';
import {Dispatch} from '@/typings';
import {IAllReducerProps} from '../types';
import {getReducerData} from '@/redux/store';
import api from '@/webapi';
import {extraPathsValue} from '@/redux/util';

export default (dispatch: Dispatch) => {
  let action = {
    commonChange(...param: any) {
      dispatch({
        type: Command.commonChange,
        payload: extraPathsValue(...arguments),
      });
    },

    /**
     * 修改订单
     */
    async modify() {},

    /**
     * 打印订单
     */
    async print() {},

    /**
     * 收款
     */
    async count() {},

    /**
     * 取消订单
     */
    async cancel() {},

    /**
     * 分配提成员工
     */
    async assignEmployee() {},
  };
  return action;
};

function getData(): IAllReducerProps {
  return {
    main: getReducerData('goodsInfoMain'),
  };
}
