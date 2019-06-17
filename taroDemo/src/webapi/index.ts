/**
 * @d

 esc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/3/4
 **/

import 'whatwg-fetch';
    import  xsiteController from './XsiteController'; 
    
    import  tradeBaseController from './TradeBaseController'; 
    
    import  weChatPublicPlatformController from './WeChatPublicPlatformController'; 
    
    import  wechatLoginController from './WechatLoginController'; 
    
    import  thirdLoginController from './ThirdLoginController'; 
    
    import  systemController from './SystemController'; 
    
    import  storeController from './StoreController'; 
    
    import  storeTobeEvaluateController from './StoreTobeEvaluateController'; 
    
    import  storeCateBaseController from './StoreCateBaseController'; 
    
    import  storeFollowController from './StoreFollowController'; 
    
    import  storeFollowBaseController from './StoreFollowBaseController'; 
    
    import  storeBaseController from './StoreBaseController'; 
    
    import  storeHistoryBaseController from './StoreHistoryBaseController'; 
    
    import  storeLevelBaseController from './StoreLevelBaseController'; 
    
    import  purchaseBaseController from './PurchaseBaseController'; 
    
    import  returnOrderBaseController from './ReturnOrderBaseController'; 
    
    import  returnOrderController from './ReturnOrderController'; 
    
    import  systemPointsConfigController from './SystemPointsConfigController'; 
    
    import  petTimingCardController from './PetTimingCardController'; 
    
    import  petRechargeableCardController from './PetRechargeableCardController'; 
    
    import  petCouponInfoController from './PetCouponInfoController'; 
    
    import  authorizeController from './AuthorizeController'; 
    
    import  payBaseController from './PayBaseController'; 
    
    import  payController from './PayController'; 
    
    import  mobileConfigController from './MobileConfigController'; 
    
    import  mobileSettingController from './MobileSettingController'; 
    
    import  marketingController from './MarketingController'; 
    
    import  systemGrowthValueConfigController from './SystemGrowthValueConfigController'; 
    
    import  goodsTobeEvaluateController from './GoodsTobeEvaluateController'; 
    
    import  goodsEvaluateController from './GoodsEvaluateController'; 
    
    import  goodsInfoBaseController from './GoodsInfoBaseController'; 
    
    import  goodsBaseController from './GoodsBaseController'; 
    
    import  searchHistoryBaseController from './SearchHistoryBaseController'; 
    
    import  goodsCateBaseController from './GoodsCateBaseController'; 
    
    import  goodsBrandBaseController from './GoodsBrandBaseController'; 
    
    import  marketingFullGiftController from './MarketingFullGiftController'; 
    
    import  expressCompanyController from './ExpressCompanyController'; 
    
    import  storeCustomerController from './StoreCustomerController'; 
    
    import  customerDrawCashController from './CustomerDrawCashController'; 
    
    import  distributorGoodsInfoController from './distributor-goods-info-controller'; 
    
    import  distributionPerformanceController from './DistributionPerformanceController'; 
    
    import  distributionMiniProgramController from './DistributionMiniProgramController'; 
    
    import  distributionGoodsMatterController from './DistributionGoodsMatterController'; 
    
    import  distributionSettingController from './DistributionSettingController'; 
    
    import  distributionCustomerRankingController from './distribution-customer-ranking-controller'; 
    
    import  distributionController from './distribution-controller'; 
    
    import  timingCardCodeController from './TimingCardCodeController'; 
    
    import  rechargeableCardCodeController from './RechargeableCardCodeController'; 
    
    import  customerPointsController from './CustomerPointsController'; 
    
    import  customerLevelRightsBaseController from './CustomerLevelRightsBaseController'; 
    
    import  customerLevelBaseController from './CustomerLevelBaseController'; 
    
    import  customerInvoiceBaseController from './CustomerInvoiceBaseController'; 
    
    import  bossCustomerController from './BossCustomerController'; 
    
    import  customerFundsController from './CustomerFundsController'; 
    
    import  inviteCustomerRecordController from './InviteCustomerRecordController'; 
    
    import  customerBaseController from './CustomerBaseController'; 
    
    import  customerDeliveryAddressBaseController from './CustomerDeliveryAddressBaseController'; 
    
    import  customerAccountBaseController from './CustomerAccountBaseController'; 
    
    import  couponInfoController from './CouponInfoController'; 
    
    import  couponCodeBaseController from './CouponCodeBaseController'; 
    
    import  couponCateController from './CouponCateController'; 
    
    import  configController from './config-controller'; 
    
    import  resourceBaseController from './ResourceBaseController'; 
    
    import  imageBaseController from './ImageBaseController'; 
    
    import  loginBaseController from './LoginBaseController'; 
    
    import  storeExpressCompanyBaseController from './StoreExpressCompanyBaseController'; 
    
    import  customerBalanceBaseController from './CustomerBalanceBaseController'; 
    
    import  refundOrderController from './RefundOrderController'; 
    
    import  accountBaseController from './AccountBaseController'; 
    
    import  invoiceProjectBaseController from './InvoiceProjectBaseController'; 
    
// import  skuController from './SkuController';

export default {
    xsiteController, 
    
    tradeBaseController, 
    
    weChatPublicPlatformController, 
    
    wechatLoginController, 
    
    thirdLoginController, 
    
    systemController, 
    
    storeController, 
    
    storeTobeEvaluateController, 
    
    storeCateBaseController, 
    
    storeFollowController, 
    
    storeFollowBaseController, 
    
    storeBaseController, 
    
    storeHistoryBaseController, 
    
    storeLevelBaseController, 
    
    purchaseBaseController, 
    
    returnOrderBaseController, 
    
    returnOrderController, 
    
    systemPointsConfigController, 
    
    petTimingCardController, 
    
    petRechargeableCardController, 
    
    petCouponInfoController, 
    
    authorizeController, 
    
    payBaseController, 
    
    payController, 
    
    mobileConfigController, 
    
    mobileSettingController, 
    
    marketingController, 
    
    systemGrowthValueConfigController, 
    
    goodsTobeEvaluateController, 
    
    goodsEvaluateController, 
    
    goodsInfoBaseController, 
    
    goodsBaseController, 
    
    searchHistoryBaseController, 
    
    goodsCateBaseController, 
    
    goodsBrandBaseController, 
    
    marketingFullGiftController, 
    
    expressCompanyController, 
    
    storeCustomerController, 
    
    customerDrawCashController, 
    
    distributorGoodsInfoController, 
    
    distributionPerformanceController, 
    
    distributionMiniProgramController, 
    
    distributionGoodsMatterController, 
    
    distributionSettingController, 
    
    distributionCustomerRankingController, 
    
    distributionController, 
    
    timingCardCodeController, 
    
    rechargeableCardCodeController, 
    
    customerPointsController, 
    
    customerLevelRightsBaseController, 
    
    customerLevelBaseController, 
    
    customerInvoiceBaseController, 
    
    bossCustomerController, 
    
    customerFundsController, 
    
    inviteCustomerRecordController, 
    
    customerBaseController, 
    
    customerDeliveryAddressBaseController, 
    
    customerAccountBaseController, 
    
    couponInfoController, 
    
    couponCodeBaseController, 
    
    couponCateController, 
    
    configController, 
    
    resourceBaseController, 
    
    imageBaseController, 
    
    loginBaseController, 
    
    storeExpressCompanyBaseController, 
    
    customerBalanceBaseController, 
    
    refundOrderController, 
    
    accountBaseController, 
    
    invoiceProjectBaseController, 
    
    // skuController,
}
