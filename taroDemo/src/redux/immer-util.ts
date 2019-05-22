/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/4/28
 **/


export function commonChange(immerObj,param:{
  batchUpdate?:[{
    paths:string[];
    value:any;
  }];
  paths:string[];
  value:any;
  key:string;
}) {
  if(param.paths[0]===param.key) {
    modifyDeep(immerObj,param.paths.splice(1),param.value);
  }

  if(param.batchUpdate){
    for (let i = 0, iLen = param.batchUpdate.length; i < iLen; i++) {
      let {paths,value} = param.batchUpdate[i];
      if(paths[0]===param.key) {
        modifyDeep(immerObj,paths.splice(1),value);
      }
    }

  }
  console.log('commonchnage');

  return immerObj;
}

export function modifyDeep(immerObj,paths:(string|number)[], value:any) {

  let obj = immerObj;
  let lastIndex= paths.length-1;
  for (let i = 0, iLen = lastIndex; i < iLen; i++) {
    obj=obj[paths[i]];
    if(!obj) {
       console.warn(`the obj defined by paths ${paths} is not exist!!`)
    }
  }

  obj[paths[lastIndex]]=value;
}


export function assign(immerObj,obj){
  if(!obj){
    return immerObj;
  }
  for (let propKey in obj) {
    immerObj[propKey] = obj[propKey];
  }
  return immerObj;
}