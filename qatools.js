var textBox = require('../QATools/Assets/arrays')
module.exports = {
    beforeEach: browser => {
        QA = browser.page.qatoolsObj()
        QA.navigate()
        browser.maximizeWindow()

    },
    after: browser => {
        QA.end()
    },
    'Text Box': browser => {
        QA
            .click('@elements')
            .textBoxFillnVer(QA, textBox[0])
            .textBoxClear(QA)
            .textBoxFillnVer(QA, textBox[1])
    },
    'Check Boxes': browser => {
        QA
            .click('@elements')
            .click('@chkBox')
            .dropAll()
            .click('@xlFileChk')
            .verify.elementPresent('@allXL')
            .verify.elementPresent('@halfDownloads')
            .verify.elementPresent('@halfHome')
            .verify.containsText('@chkVerif', 'excelFile')
            .click('@wrdFileChk')
            .allDownloadsVer()
            .verify.containsText('@chkVerif', '\ndownloads\nwordFile\nexcelFile')
            .click('@downloadsChk')
            .noDownloadsVer()
            .click('@officeChk')
            .allOfficeVer()
            .verify.elementPresent('@halfDocuments')
            .verify.containsText('@chkVerif', '\noffice\npublic\nprivate\nclassified\ngeneral')
            .click('@officeChk')
            .click('@workSpaceChk')
            .allWorkSpaceVer()
            .verify.elementPresent('@halfDocuments')
            .verify.containsText('@chkVerif', '\nworkspace\nreact\nangular\nveu')
            .click('@documentsChk')
            .verify.elementPresent('@allDocuments')
            .allOfficeVer()
            .allWorkSpaceVer()
            .verify.containsText('@chkVerif', '\ndocuments\nworkspace\nreact\nangular\nveu\noffice\npublic\nprivate\nclassified\ngeneral')
            .click('@documentsChk')
            .verify.elementPresent('@noDocuments')
            .click('@deskTopChk')
            .allDeskTopVer()
            .click('@homeChk')
            .verify.elementPresent('@allDeskTop')
            .verify.elementPresent('@allDocuments')
            .verify.elementPresent('@allWorkSpace')
            .verify.elementPresent('@allOffice')
            .verify.elementPresent('@allDownloads')
            .allDeskTopVer()
            .allWorkSpaceVer()
            .allOfficeVer()
            .allDownloadsVer()
            .verify.containsText('@chkVerif', '\nhome\ndesktop\nnotes\ncommands\ndocuments\nworkspace\nreact\nangular\nveu\noffice\npublic\nprivate\nclassified\ngeneral\ndownloads\nwordFile\nexcelFile')
    },
    'Radio Buttons': browser => {
        QA
            .click('@elements')
            .click('@radio')
            .click('@radioYes')
            .verify.containsText('@radioVer', 'Yes')
            .click('@radioImp')
            .verify.containsText('@radioVer', 'Impressive')
    },
}