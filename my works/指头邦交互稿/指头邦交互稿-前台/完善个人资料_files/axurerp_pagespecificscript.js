for(var i = 0; i < 22; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u21'] = 'center';gv_vAlignTable['u12'] = 'center';u4.tabIndex = 0;

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('主页_用户未登录_.html');

}
});
gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u1'] = 'center';document.getElementById('u9_img').tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('主页_用户已登录_.html');

}
});
gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u6'] = 'center';document.getElementById('u11_img').tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('用户登录.html');

}
});
