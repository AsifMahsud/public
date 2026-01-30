window.wizardHouseRefinanceSteps = [
new KWizard.LinearHtmlFormStep({name: 'init', nextName:'currently-have-fha-loan', builder: function(){ return (
  '<p class="h2">What type of property do you want to Refinance?</p>'+
  KWizard.HtmlUtils.simpleRadioGroupHtml({name: 'kind-of-property', required: true, options: [
    {label:'Single Family', svg: wizardSvgs.singleFamilySvg},
    {label:'Multi-Family', svg: wizardSvgs.multiFamilySvg},
    {label:'Condominium', svg: wizardSvgs.condominiumSvg}, 
    {label: 'Townhouse', svg: wizardSvgs.townHouseSvg}
  ]})
); }}),
new KWizard.LinearHtmlFormStep({name: 'currently-have-fha-loan', nextName: 'credit-score', builder: function(){ return (              
  '<p class="h2">Do you currently have an FHA loan?</h2>'+
  KWizard.HtmlUtils.simpleRadioGroupHtml({name: 'currently-have-fha-loan', required: true, options: [
    {label:'Yes', svg: wizardSvgs.yesSvg},
    {label:'No', svg: wizardSvgs.noSvg}
  ]})
); }}),
new KWizard.LinearHtmlFormStep({name: 'credit-score', nextName: 'property-use', builder: function(){ return (
  '<p class="h2">What Is Your Credit Score?</h2>'+
  KWizard.HtmlUtils.simpleRadioGroupHtml({name: 'credit-score', required: true, options: [
    {label:'720+', svg: wizardSvgs.creditScoreFive},
    {label:'660 - 719', svg: wizardSvgs.creditScoreFour},
    {label:'620 - 659', svg: wizardSvgs.creditScoreThree}, 
    {label: '580 - 619', svg: wizardSvgs.creditScoreTwo}, 
    {label: '579 or Lower', svg: wizardSvgs.creditScoreOne}
  ]})
); }}),
new KWizard.LinearHtmlFormStep({name: 'property-use', nextName: 'have-a-mortgage', builder: function(){ return (              
  '<p class="h2">What Is The Property Use?</h2>'+
  KWizard.HtmlUtils.simpleRadioGroupHtml({name: 'property-use', required: true, options: [
    {label:'Primary Residence', svg: wizardSvgs.primaryResidenceSvg},
    {label:'Secondary Residence', svg: wizardSvgs.secondaryResidenceSvg}, 
    {label:'Investment Property', svg: wizardSvgs.investmentPropertySvg}
  ]})
); }}),
new KWizard.ConditionalHtmlFormStep({name: 'have-a-mortgage', continues: [
  {'step': 'mortage-balance', isMatch: function(s){
    return s['have-a-mortgage']==='Yes';
  }},
  {'step': 'employment-status', isMatch: function(s){ return true }}
], builder: function(){ return (              
  '<p class="h2">Do You Have A Mortgage Now?</h2>'+
  KWizard.HtmlUtils.simpleRadioGroupHtml({name: 'have-a-mortgage', required: true, options: [
    {label:'Yes', svg: wizardSvgs.yesSvg},
    {label:'No', svg: wizardSvgs.noSvg}
  ]})
); }}),
new KWizard.LinearHtmlFormStep({name: 'mortage-balance', nextName: 'mortage-rate', builder: function(){ return (              
  '<p class="h2">What Is Your Mortgage Balance?</h2>'+
  KWizard.HtmlUtils.simpleRadioGroupHtml({name: 'mortage-balance', required: true, options: [
    {label:'< $100,000', svg: wizardSvgs.mortgageBalanceOne},
    {label:'$100,000 - $200,000', svg: wizardSvgs.mortgageBalanceTwo},
    {label:'$200,001 - $300,000', svg: wizardSvgs.mortgageBalanceThree},
    {label:'> $300,000', svg: wizardSvgs.mortgageBalanceFour}
  ]})
); }}),
new KWizard.LinearHtmlFormStep({name: 'mortage-rate', nextName: 'employment-status', builder: function(){ return (              
  '<p class="h2">What Is Your Mortgage Rate?</h2>'+
  KWizard.HtmlUtils.simpleRadioGroupHtml({name: 'mortage-rate', required: true, options: [
    {label:'Less than 6%', svg: wizardSvgs.mortgageRateOne},
    {label:'6 - 8%', svg: wizardSvgs.mortgageRateTwo},
    {label:'8 - 10%', svg: wizardSvgs.mortgageRateThree},
    {label:'More than 10%', svg: wizardSvgs.mortgageRateFour}
  ]})
); }}),
new KWizard.LinearHtmlFormStep({name: 'employment-status', nextName: 'form', builder: function(){ return (              
  '<p class="h2">Are You Self Employed?</h2>'+
  KWizard.HtmlUtils.simpleRadioGroupHtml({name: 'employment-status', required: true, options: [
    {label:'Self Employed', svg: wizardSvgs.selfEmployedSvg},
    {label:'Employed', svg: wizardSvgs.employedSvg}, 
    {label:'Un-Employed', svg: wizardSvgs.unEmployedSvg}
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
