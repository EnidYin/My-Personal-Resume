for(var i = 0; i < 20; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
u3.tabIndex = 0;

u3.style.cursor = 'pointer';
$axure.eventManager.click('u3', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('用户管理-超级管理员用户.html');

}
});
gv_vAlignTable['u3'] = 'top';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u7'] = 'top';