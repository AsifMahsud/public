window.wizardHousePurchaseSteps = [
new KWizard.LinearHtmlFormStep({name: 'init', nextName:'credit-score', builder: function(){ return (
  '<p class="h2">What Kind Of Home Are You Looking To Buy?</p>'+
  KWizard.HtmlUtils.simpleRadioGroupHtml({name: 'kind-of-home', required: true, options: [
    {label:'Single Family', svg: wizardSvgs.singleFamilySvg},
    {label:'Multi-Family', svg: wizardSvgs.multiFamilySvg},
    {label:'Condominium', svg: wizardSvgs.condominiumSvg}, 
    {label: 'Townhouse', svg: wizardSvgs.townHouseSvg}
  ]})
); }}),
new KWizard.LinearHtmlFormStep({name: 'credit-score', nextName: 'first-time-buyer', builder: function(){ return (
  '<p class="h2">What Is Your Credit Score?</h2>'+
  KWizard.HtmlUtils.simpleRadioGroupHtml({name: 'credit-score', required: true, options: [
    {label:'720+', svg: wizardSvgs.creditScoreFive},
    {label:'660 - 719', svg: wizardSvgs.creditScoreFour},
    {label:'620 - 659', svg: wizardSvgs.creditScoreThree}, 
    {label: '580 - 619', svg: wizardSvgs.creditScoreTwo}, 
    {label: '579 or Lower', svg: wizardSvgs.creditScoreOne}
  ]})
); }}),
new KWizard.LinearHtmlFormStep({name: 'first-time-buyer', nextName: 'property-use', builder: function(){ return (              
  '<p class="h2">Are You A First Time Buyer?</h2>'+
  KWizard.HtmlUtils.simpleRadioGroupHtml({name: 'first-time-buyer', required: true, options: [
    {label:'Yes', svg: wizardSvgs.yesSvg},
    {label:'No', svg: wizardSvgs.noSvg}
  ]})
); }}),
new KWizard.LinearHtmlFormStep({name: 'property-use', nextName: 'served-as-usa-military', builder: function(){ return (              
  '<p class="h2">How Will You Use The Property?</h2>'+
  KWizard.HtmlUtils.simpleRadioGroupHtml({name: 'property-use', required: true, options: [
    {label:'Primary Residence', svg: wizardSvgs.primaryResidenceSvg},
    {label:'Secondary Residence', svg: wizardSvgs.secondaryResidenceSvg}, 
    {label:'Investment Property', svg: wizardSvgs.investmentPropertySvg}
  ]})
); }}),
new KWizard.LinearHtmlFormStep({name: 'served-as-usa-military', nextName: 'self-employed', builder: function(){ return (              
  '<p class="h2">Have You Ever Served In The U.S. Military?</h2>'+
  KWizard.HtmlUtils.simpleRadioGroupHtml({name: 'served-as-usa-military', required: true, options: [
    {label:'Yes', svg: wizardSvgs.yesSvg},
    {label:'No', svg: wizardSvgs.noSvg}
  ]})
); }}),
new KWizard.LinearHtmlFormStep({name: 'self-employed', nextName: 'down-payment', builder: function(){ return (              
  '<p class="h2">Are You Self Employed?</h2>'+
  KWizard.HtmlUtils.simpleRadioGroupHtml({name: 'self-employed', required: true, options: [
    {label:'Yes', svg: wizardSvgs.yesSvg},
    {label:'No', svg: wizardSvgs.noSvg}
  ]})
); }}),
new KWizard.LinearHtmlFormStep({name: 'down-payment', nextName: 'form', builder: function(){ return (              
  '<p class="h2">How Much Down Payment Do You Have?</h2>'+
  KWizard.HtmlUtils.simpleRadioGroupHtml({name: 'down-payment', required: true, options: [
    {label:'Less than 5%', svg: wizardSvgs.paymentOne},
    {label:'5 - 10%', svg: wizardSvgs.paymentTwo},
    {label:'10 - 20%', svg: wizardSvgs.paymentThree},
    {label:'More than 20%', svg: wizardSvgs.paymentFour}
  ]})
); }}),
new KWizard.LinearHtmlFormStep({name: 'form', nextName: 'end', builder: function(){ return (
  '<div class="form-condensed-invalid-feedback">'+
  '<div class="form-group"><label for="wizard-address">Address</label><input id="wizard-address" type="text" class="form-control" name="address" required=""><div class="invalid-feedback">Required.</div></div>' +
  '<div class="form-group"><label for="wizard-zip">Zip / Postal Code</label><input id="wizard-zip" type="text" class="form-control" name="zip" required=""><div class="invalid-feedback">Required.</div></div>' +
  '<div class="form-group"><label for="wizard-phone">Phone</label><input id="wizard-phone" type="tel" class="form-control" name="phone" required=""><div class="invalid-feedback">Required.</div></div>' +
  '<div class="form-group"><label for="wizard-email">Email</label><input id="wizard-email" type="email" class="form-control" name="email" required=""><div class="invalid-feedback">Required.</div></div>' +
  '<div class="form-group"><label for="wizard-name">Full Name</label><input id="wizard-name" type="text" class="form-control" name="name" required=""><div class="invalid-feedback">Required.</div></div>'+
  '</div>'
); }}),
new KWizard.LinearHtmlFormStep({name: 'end', builder: function(){ return (
  '<p class="h2">Thank You!</h2>'
); }})
];
