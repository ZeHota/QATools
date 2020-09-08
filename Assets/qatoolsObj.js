var qaCommands = {
    //Textbox
    textBoxFillnVer: function (browser, item) {
        this
            .click('@textBox')
            .setValue('@fullName', item.name)
            .setValue('@email', item.email)
            .setValue('@currAdd', item.currAdd)
            .setValue('@permAdd', item.permAdd)
            .click('@textSubmit')
            .verify.containsText('@nameVer', item.name)
            .verify.containsText('@emailVer', item.email)
            .verify.containsText('@currAddVer', item.currAdd)
            .verify.containsText('@permAddVer', item.permAdd)
        return this
    },
    textBoxClear: function (browser) {
        this
            .clearValue('@fullName')
            .clearValue('@email')
            .clearValue('@currAdd')
            .clearValue('@permAdd')
        return this
    },
    //Checks
    dropAll: function (browser) {
        this
            .click('@homeDrop')
            .click('@deskTopDrop')
            .click('@documentsDrop')
            .click('@workSpaceDrop')
            .click('@officeDrop')
            .click('@downloadsDrop')
        return this
    },
    allDeskTopVer: function (browser) {
        this
            .verify.elementPresent('@allNotes')
            .verify.elementPresent('@allCommands')
        return this
    },
    noDeskTopVer: function (browser) {
        this
            .verify.elementPresent('@noNotes')
            .verify.elementPresent('@noCommands')
    },
    allWorkSpaceVer: function (browser) {
        this
            .verify.elementPresent('@allReact')
            .verify.elementPresent('@allAngular')
            .verify.elementPresent('@allVeu')
            .verify.elementPresent('@allWorkSpace')
        return this
    },
    noWorkSpaceVer: function (browser) {
        this
            .verify.elementPresent('@noReact')
            .verify.elementPresent('@noAngular')
            .verify.elementPresent('@noVeu')
            .verify.elementPresent('@noWorkSpace')
    },
    allOfficeVer: function (browser) {
        this
            .verify.elementPresent('@allGeneral')
            .verify.elementPresent('@allClassified')
            .verify.elementPresent('@allPrivate')
            .verify.elementPresent('@allPublic')
            .verify.elementPresent('@allOffice')
        return this
    },
    noOfficVer: function (browser) {
        this
            .verify.elementPresent('@noGeneral')
            .verify.elementPresent('@noClassified')
            .verify.elementPresent('@noPrivate')
            .verify.elementPresent('@noPublic')
            .verify.elementPresent('@noOffice')
        return this
    },
    allDownloadsVer: function (browser) {
        this
            .verify.elementPresent('@allXL')
            .verify.elementPresent('@allWord')
            .verify.elementPresent('@allDownloads')
        return this
    },
    noDownloadsVer: function (browser) {
        this
            .verify.elementPresent('@noXL')
            .verify.elementPresent('@noWord')
            .verify.elementPresent('@noDownloads')
        return this
    },
    //Web Tables
    tableAddnDel: function (browser, item) {
        this
            .useXpath()
            .click('@addButton')
            .setValue('@addFirstName', item.first)
            .setValue('@addLastName', item.last)
            .setValue('@addEmail', item.email)
            .setValue('@addAge', item.age)
            .setValue('@addSalary', item.salary)
            .setValue('@addDept', item.department)
            .click('@submit')
            .verify.elementPresent(`//div[div[contains(text(), "${item.first}")] and div[contains(text(), "${item.last}")] and div[contains(text(), "${item.age}")] and div[contains(text(), "${item.email}")] and div[contains(text(), "${item.salary}")] and div[contains(text(), "${item.department}")]]`)
            .click(`//div[div[contains(text(), "${item.first}")] and div[contains(text(), "${item.last}")] and div[contains(text(), "${item.age}")] and div[contains(text(), "${item.email}")] and div[contains(text(), "${item.salary}")] and div[contains(text(), "${item.department}")]]//*/span[@title="Delete"]`)
            .verify.not.elementPresent(`//div[div[contains(text(), "${item.first}")] and div[contains(text(), "${item.last}")] and div[contains(text(), "${item.age}")] and div[contains(text(), "${item.email}")] and div[contains(text(), "${item.salary}")] and div[contains(text(), "${item.department}")]]`)
        return this
    },
}
module.exports = {
    url: 'https://demoqa.com/',
    commands: [qaCommands],
    elements: {
        elements: { selector: '(//div[@class="card mt-4 top-card"])[1]', locateStrategy: 'xpath' },
        //TextBox
        //Inputs
        textBox: { selector: '//span[contains(text(), "Text Box")]', locateStrategy: 'xpath' },
        fullName: { selector: '//input[@id="userName"]', locateStrategy: 'xpath' },
        email: { selector: '//input[@id="userEmail"]', locateStrategy: 'xpath' },
        currAdd: { selector: '//textarea[@id="currentAddress"]', locateStrategy: 'xpath' },
        permAdd: { selector: '//textarea[@id="permanentAddress"]', locateStrategy: 'xpath' },
        textSubmit: { selector: '//button[@id="submit"]', locateStrategy: 'xpath' },
        //Verifs
        nameVer: { selector: '//p[@id="name"]', locateStrategy: 'xpath' },
        emailVer: { selector: '//p[@id="email"]', locateStrategy: 'xpath' },
        currAddVer: { selector: '//p[@id="currentAddress"]', locateStrategy: 'xpath' },
        permAddVer: { selector: '//p[@id="permanentAddress"]', locateStrategy: 'xpath' },

        //Check Boxes
        //Boxes
        chkBox: { selector: '//span[contains(text(), "Check Box")]', locateStrategy: 'xpath' },
        homeChk: { selector: '//span[contains(text(), "Home")]', locateStrategy: 'xpath' },
        deskTopChk: { selector: '//span[contains(text(), "Desktop")]', locateStrategy: 'xpath' },
        notesChk: { selector: '//span[contains(text(), "Notes")]', locateStrategy: 'xpath' },
        commandsChk: { selector: '//span[contains(text(), "Commands")]', locateStrategy: 'xpath' },
        documentsChk: { selector: '//span[contains(text(), "Documents")]', locateStrategy: 'xpath' },
        workSpaceChk: { selector: '//span[contains(text(), "WorkSpace")]', locateStrategy: 'xpath' },
        reactChk: { selector: '//span[contains(text(), "React")]', locateStrategy: 'xpath' },
        angularChk: { selector: '//span[contains(text(), "Angular")]', locateStrategy: 'xpath' },
        veuChk: { selector: '//span[contains(text(), "Veu")]', locateStrategy: 'xpath' },
        officeChk: { selector: '//span[contains(text(), "Office")]', locateStrategy: 'xpath' },
        publicChk: { selector: '//span[contains(text(), "Public")]', locateStrategy: 'xpath' },
        privateChk: { selector: '//span[contains(text(), "Private")]', locateStrategy: 'xpath' },
        classifiedChk: { selector: '//span[contains(text(), "Classified")]', locateStrategy: 'xpath' },
        generalChk: { selector: '//span[contains(text(), "General")]', locateStrategy: 'xpath' },
        downloadsChk: { selector: '//span[contains(text(), "Downloads")]', locateStrategy: 'xpath' },
        wrdFileChk: { selector: '//span[contains(text(), "Word File.doc")]', locateStrategy: 'xpath' },
        xlFileChk: { selector: '//span[contains(text(), "Excel File.doc")]', locateStrategy: 'xpath' },

        //Drop Arrows
        homeDrop: { selector: '//span[@class="rct-text"]/label[@for="tree-node-home"]/preceding-sibling::button', locateStrategy: 'xpath' },
        deskTopDrop: { selector: '//span[@class="rct-text"]/label[@for="tree-node-desktop"]/preceding-sibling::button', locateStrategy: 'xpath' },
        documentsDrop: { selector: '//span[@class="rct-text"]/label[@for="tree-node-documents"]/preceding-sibling::button', locateStrategy: 'xpath' },
        workSpaceDrop: { selector: '//span[@class="rct-text"]/label[@for="tree-node-workspace"]/preceding-sibling::button', locateStrategy: 'xpath' },
        officeDrop: { selector: '//span[@class="rct-text"]/label[@for="tree-node-office"]/preceding-sibling::button', locateStrategy: 'xpath' },
        downloadsDrop: { selector: '//span[@class="rct-text"]/label[@for="tree-node-downloads"]/preceding-sibling::button', locateStrategy: 'xpath' },

        //Verifs
        allHome: { selector: '//label[@for="tree-node-home"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-check")]]', locateStrategy: 'xpath' },
        halfHome: { selector: '//label[@for="tree-node-home"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-half-check")]]', locateStrategy: 'xpath' },
        noHome: { selector: '//label[@for="tree-node-home"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-uncheck")]]', locateStrategy: 'xpath' },
        allDeskTop: { selector: '//label[@for="tree-node-desktop"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-check")]]', locateStrategy: 'xpath' },
        halfDeskTop: { selector: '//label[@for="tree-node-desktop"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-half-check")]]', locateStrategy: 'xpath' },
        noDeskTop: { selector: '//label[@for="tree-node-desktop"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-uncheck")]]', locateStrategy: 'xpath' },
        allNotes: { selector: '//label[@for="tree-node-notes"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-check")]]', locateStrategy: 'xpath' },
        noNotes: { selector: '//label[@for="tree-node-notes"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-uncheck")]]', locateStrategy: 'xpath' },
        allCommands: { selector: '//label[@for="tree-node-commands"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-check")]]', locateStrategy: 'xpath' },
        noCommands: { selector: '//label[@for="tree-node-commands"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-uncheck")]]', locateStrategy: 'xpath' },
        allDocuments: { selector: '//label[@for="tree-node-documents"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-check")]]', locateStrategy: 'xpath' },
        halfDocuments: { selector: '//label[@for="tree-node-documents"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-half-check")]]', locateStrategy: 'xpath' },
        noDocuments: { selector: '//label[@for="tree-node-documents"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-uncheck")]]', locateStrategy: 'xpath' },
        allWorkSpace: { selector: '//label[@for="tree-node-workspace"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-check")]]', locateStrategy: 'xpath' },
        halfWorkSpace: { selector: '//label[@for="tree-node-workspace"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-half-check")]]', locateStrategy: 'xpath' },
        noWorkSpace: { selector: '//label[@for="tree-node-workspace"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-uncheck")]]', locateStrategy: 'xpath' },
        allReact: { selector: '//label[@for="tree-node-react"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-check")]]', locateStrategy: 'xpath' },
        noReact: { selector: '//label[@for="tree-node-react"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-uncheck")]]', locateStrategy: 'xpath' },
        allAngular: { selector: '//label[@for="tree-node-angular"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-check")]]', locateStrategy: 'xpath' },
        noAngular: { selector: '//label[@for="tree-node-angular"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-uncheck")]]', locateStrategy: 'xpath' },
        allVeu: { selector: '//label[@for="tree-node-veu"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-check")]]', locateStrategy: 'xpath' },
        noVeu: { selector: '//label[@for="tree-node-veu"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-uncheck")]]', locateStrategy: 'xpath' },
        allOffice: { selector: '//label[@for="tree-node-office"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-check")]]', locateStrategy: 'xpath' },
        halfOffice: { selector: '//label[@for="tree-node-office"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-half-check")]]', locateStrategy: 'xpath' },
        noOffice: { selector: '//label[@for="tree-node-office"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-uncheck")]]', locateStrategy: 'xpath' },
        allPublic: { selector: '//label[@for="tree-node-public"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-check")]]', locateStrategy: 'xpath' },
        noPublic: { selector: '//label[@for="tree-node-public"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-uncheck")]]', locateStrategy: 'xpath' },
        allPrivate: { selector: '//label[@for="tree-node-private"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-check")]]', locateStrategy: 'xpath' },
        noPrivate: { selector: '//label[@for="tree-node-private"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-uncheck")]]', locateStrategy: 'xpath' },
        allClassified: { selector: '//label[@for="tree-node-classified"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-check")]]', locateStrategy: 'xpath' },
        noClassified: { selector: '//label[@for="tree-node-classified"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-uncheck")]]', locateStrategy: 'xpath' },
        allGeneral: { selector: '//label[@for="tree-node-general"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-check")]]', locateStrategy: 'xpath' },
        noGeneral: { selector: '//label[@for="tree-node-general"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-uncheck")]]', locateStrategy: 'xpath' },
        allDownloads: { selector: '//label[@for="tree-node-downloads"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-check")]]', locateStrategy: 'xpath' },
        halfDownloads: { selector: '//label[@for="tree-node-downloads"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-half-check")]]', locateStrategy: 'xpath' },
        noDownloads: { selector: '//label[@for="tree-node-downloads"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-uncheck")]]', locateStrategy: 'xpath' },
        allWord: { selector: '//label[@for="tree-node-wordFile"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-check")]]', locateStrategy: 'xpath' },
        noWord: { selector: '//label[@for="tree-node-wordFile"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-uncheck")]]', locateStrategy: 'xpath' },
        allXL: { selector: '//label[@for="tree-node-excelFile"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-check")]]', locateStrategy: 'xpath' },
        noXL: { selector: '//label[@for="tree-node-excelFile"]/span[.//*[name()="svg"][contains(@class, "rct-icon rct-icon-uncheck")]]', locateStrategy: 'xpath' },
        chkVerif: { selector: '//div[@id="result"]', locateStrategy: 'xpath' },

        //Radio
        radio: { selector: '//span[contains(text(), "Radio Button")]', locateStrategy: 'xpath' },
        radioYes: { selector: '//label[@for="yesRadio"]', locateStrategy: 'xpath' },
        radioImp: { selector: '//label[@for="impressiveRadio"]', locateStrategy: 'xpath' },
        radioVer: { selector: '//span[@class="text-success"]', locateStrategy: 'xpath' },

        //Web Tables
        tables: { selector: '//span[contains(text(), "Web Tables")]', locateStrategy: 'xpath' },
        addButton: { selector: '//button[@id="addNewRecordButton"]', locateStrategy: 'xpath' },
        submit: { selector: '//button[@id="submit"]', locateStrategy: 'xpath' },
        addFirstName: { selector: '//input[@id="firstName"]', locateStrategy: 'xpath' },
        addLastName: { selector: '//input[@id="lastName"]', locateStrategy: 'xpath' },
        addEmail: { selector: '//input[@id="userEmail"]', locateStrategy: 'xpath' },
        addAge: { selector: '//input[@id="age"]', locateStrategy: 'xpath' },
        addSalary: { selector: '//input[@id="salary"]', locateStrategy: 'xpath' },
        addDept: { selector: '//input[@id="department"]', locateStrategy: 'xpath' },
        // addResult: { selector: `//div[div[contains(text(), "${item.first}")] and div[contains(text(), "${item.last}")] and div[contains(text(), "${item.age}")] and div[contains(text(), "${item.email}")] and div[contains(text(), "${item.salary}")] and div[contains(text(), "${item.department}")]]`, locateStrategy: 'xpath' },
        // deleteNew: { selector: `//div[div[contains(text(), "${item.first}")] and div[contains(text(), "${item.last}")] and div[contains(text(), "${item.age}")] and div[contains(text(), "${item.email}")] and div[contains(text(), "${item.salary}")] and div[contains(text(), "${item.department}")]]//*/span[@title="Delete"]`, locateStrategy: 'xpath' },
        // firstRow: { selector: '(//div[@role="rowgroup"])[1]', locateStrategy: 'xpath'},


    }
}