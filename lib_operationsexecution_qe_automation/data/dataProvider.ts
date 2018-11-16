import { browser } from "../node_modules/protractor";

'use strict';


export class DataProvider {


    public static Common: any = {

        jbhuntUrl: 'https://my.jbhunt.com/',
        PaceUrl: 'https://dcs.jbhunt.com/pace/login.jsp',
        Fuel_SurchargeUrl: 'http://fuelsurcharge.jbhunt.com/fuelsurcharge',
        Offer_ManagementUrl: 'https://offermanagement.jbhunt.com/offerManagement/',
        Ltl_ConsolidatorUrl: 'http://ltlconsolidator.jbhunt.com/app_ltlConsolidator/pages/ltlScreen.iface',
        freightManager2: 'http://fm.jbhunt.com/FreightManager2/common/index.iface?',

    };

    public static TC_136717: any = {

        'data': {
            CMSPageTitle: 'cms',
            searchTypeValue: 'Dot Number',
            searchTextValue: '2839713'
        }

    }

    public static TC_136720: any = {

        'data': {
            CMSPageTitle: 'cms',
            searchTypeValue: 'Dot Number',
            searchTextValue: '2839713',
            carrierSearchName: 'TERCIO TRANSPORT LLC',
            successMessage: 'Successfully saved the carrier status information.'
        }

    }

    public static Tc_131127: any = {
        'data': {
            railManagerLink: 'Rail Manager',
            etaTab: "ETA",
            notificationRulesOption: 'Notification Rules',
            defaultRulesOption: 'Defaults Rules',
            defaultRulesTitle: 'Default Rules'


        }
    }
    public static Tc_130791: any = {
        'data': {

        }
    }
    public static Tc_131126: any = {
        'data': {
            railManagerLink: 'Rail Manager',
            etaTab: "ETA",
            Trainstab: "Trains",
            trainsPageTitle: 'Trains',
            searchButton: 'Search'

        }
    }

    public static Tc_158503: any = {
        'data': {

            dropdownOption: 'Equipment',
            dropdownValue: 'Search',
            chassisValue: 'CHASSIS',
            SearchValue: 'Search',
            LastLinkValue: 'Last',
            paginationFirstValue: 'First',
            dropdownValue1: 'Equipment Details',
            outputURL: 'assetAdministration'
        }
    }

    public static Tc_131129:any ={
        'data':{
            railManagerLink: 'Rail Manager',
            etaTab: "ETA",
            notificationRulesOption : 'Notification Rules',
            exceptionRulesOption: 'Exception Rules',
            exceptionRulesTitle : 'Exception Rules'

        }
    }


    public static Tc_162022: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Dwell',
            optionName: 'Outgated',
            outGatedSummaryScreenTitle: 'Trailer Dwell',
            search: 'Search',
            one: '1',
            prevWorkActionOption: 'VRFCTION'
        }
    }

    public static Tc_162025: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Dwell',
            optionName: 'Outgated',
            outGatedSummaryScreenTitle: 'Trailer Dwell',
            search: 'Search',
            one: '1',
            prevWorkActionOption: 'VRFCTION',
            empty: ''
        }
    }

    public static TC_1234: any = {

        'data': {
            orderNumber: 'LS12345',
            freightManagerTitle: 'Freight Manager',
            planningTab: 'Planning',
            pickUpOption: 'Pick Up',
            pickUpViewPageTitle: 'Pickup View',
            divisionInput: 'division',
            codeOne: '1',
            divisionText: 'HJBT JBVAN',
            areaTypeInput: 'areaType',
            areaTypeText: 'MKT',
            areaInput: 'area',
            areaText: 'DA',
            columnPWRDRVR: 'PWR/DRVR\nNOTES',
            columnTCALL: 'TCALL\nLOC',
            loadText: 'ORDER #',
            searchLoadButton: 'eomSearchMain:advOrderSearch',
            searchingSkeletonsText: 'Searching Skeletons',
        }

    }

    public static Tc_86419: any = {
        'data': {
            templateManagement: 'Template Management',
            l833: 'L833',
            locations: 'Locations',
            incerssion: '>>',
        }
    }

    public static TC_87157: any = {

        'data': {
            CMSPageTitle: 'cms',
            MKTAreaDropdownValue: 'AK',
            carrierLink: 'ALASKA WEST EXPRESS INC',
            originTypeDropDownValue: 'TSTATE',
            originLocationDropDownValue: '60004',
            destinationTypeDropDownValue: 'TSTATE',
            destinationLocationDropDownValue: '6200753',
            equipmentTypeDropDownValue: 'DRY VAN',
            rpmTextBoxrpmTextBoxValue: '99',
            minimumChargeAmountValue: '999',
            documentTypeValue: 'PROFILE',
            efferctiveDate: '03/26/2018',
            expiryDateValue: '03/28/2018',
        }

    }

    public static Tc_142317: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Trailer',
            optionName: 'Dropped',
            assignedToDropdownValue: 'JOPS512'
        }
    }

    public static TC_87356: any = {

        'data': {
            CMSPageTitle: 'cms',
            carrierSearchLink: 'Carrier Search',
            MKTValueDA: "DA",
            CarrierNameHavingStatusRejected: "REJECTED",
            divisionHJBTJBVAN: "HJBT JBVAN",
            statusValueApproved: "APPROVED",
            selectDivisonOptionsText: "selectedDivCode",
            selectDivisonOptionsOptionHJBTJBDCS: "HJBT JBDCS",
            selectDivisonOptionsOptionHJBTJBHA: "HJBT JBHA",
            textAreaEnableCheckRejected: "REJECTED",
            successMessage: "Successfully saved the project carrier associations."
        }

    }

    public static TC_87217: any = {
        'data': {
            CMSPageTitle: 'cms',
            carrierSearchLink: 'Carrier Search',
            MKTAreaDropdownValue: 'AK',
            carrierLink: 'ALASKA WEST EXPRESS INC',
            safetyTabName: 'Safety',
            ratingDropDownName: 'changeSafetyRating',
            ratingDropdownValue: 'UNSATISFACTORY',
            scoreDropdownName: 'changeSafetyScore',
            scoreDropdownValue: 'B',
            insuranceTabName: 'Insurance',
            producerNameid: 'producerName',
            producerName: 'RANA',
            producerPhoneid: 'producerPhone',
            producerPhone: '479-381-4720',
            producerFaxid: 'producerFax',
            producerFax: '305-322-9892',
            producerMailid: 'producerEmail',
            producerEmail: '@GMAIL',
            insurerid: 'insurerID',
            insurerIDValue: '1035242|A+|XV|04376|',
            insuranceTypeid: 'insuranceTypeID',
            insuranceTypeidValue: 'HH',
            insuranceAmountid: 'insuranceAmount',
            insuranceAmount: '5000',
            insuranceDeductibleid: 'insuranceDeductible',
            insuranceDeductible: '1000',
            policyNumberid: 'policyNumber',
            policyNumber: '123123',
            certificationLevelID: 'certificationLevelID',
            certificationLevelIdValue: 'SAMPLE',
            effectiveDateid: 'effectiveDate',
            effectiveDate: '03/26/2018',
            expirationDateid: 'expirationDate',
            expirationDate: '09/10/2027',
            saveButton: 'Save',
            noButton: 'No',
            producerName1: 'DD',
            producerPhone1: '479-381-4721',
            producerName2: 'DD',
            insurerIDValue1: '1074494|A|IX|18680|',
            insuranceTypeidValue1: 'AUTO_LIAB',
            autoliablityType: 'insuranceSubTypes',
            autoliablityTypeDropdownValue: 'SCHED_AUTO',
            vinNumberid: 'inputVinNumber',
            vinNumber: '01455856452546515',
            vinContact: 'inputVinContact',
            vinContactName: 'daniel',
            modelid: 'inputModel',
            modelValue: 'TOYOTA',
            yearid: 'inputMakeYear',
            year: '1800',
            insuranceAmount1: '100000',
            expirationDate1: '03/26/2020',


        }
    }

    public static TC_86813: any = {
        'data': {
            CMSPageTitle: 'cms',
            stateValue: 'AR',
            MKTValue: 'AK',
            contactsTabName: 'Contacts',
            addContactButton: 'Add Contact',
            firstNameDetail: 'DANIEL',
            lastNameDetail: 'CARVAGAL',
            middleNameDetail: 'JOSEPH',
            primaryPhoneDetail: '3053229892',
            secPhoneDetail: '3052673295',
            faxPhoneDetail: '4798684124',
            emailDetail: 'DANIEL.CARVAGAL@TEST.COM',
            saveButton: 'Save',
            firstName: 'DANIEL'
        }
    }

    public static TC_87568: any = {
        'data': {
            CMSPageTitle: 'cms',
            carrierManagement: 'Carrier Management',
            specificCarrierSearchlink: 'Specific Carrier Search',
            searchTypeDropDownValue: 'Dot Number',
            dotNumberValue: '239936',
            searchButton: 'Search',
            cancelButton: 'Cancel',
            searchTypeDropDownValue1: 'Mc Number',
            dotNumberValue1: '162815',
            searchTypeDropDownValue2: 'Email Address',
            emailAdressesValue: 'OSCARSTT@YAHOO.COM',
        }
    }

    public static Tc_98128: any = {
        'data': {
            textBoxValue: 'CLELA2',
            crSearchResults: 1,
            months: 1,
            customerRequests: 3,
            fleetCode: 'LTL',
            classificationDropDownText: 'LTL',
        }
    }
    public static Tc_131708: any = {
        'data': {
            originValue: 'LGFO18',
            value: '262',
            fleetValue: 'DCS LDC833',
            startTime: '19:00',
            endTime: '23:00',
            zero: 0
        }
    }
    public static Tc_131709: any = {
        'data': {

            originValue: 'LGFO18',
            value: '262',
            fleetValue: 'DCS LDC833',
            startTime: '19:00',
            endTime: '23:00',
            customerCode: 'LGFO18',
            selectDropdownValue: 'HJBT JBVAN',
            zero: 0

        }
    }
    public static Tc_131711: any = {
        'data': {
            BoardCode1: "LR1",
            BoardCode2: "L1R",
            BoardCode3: "G19",
            BoardCode4: "G20",
            originValue: 'LGFO18',
            value: '262',
            fleetValue: 'DCS LDC833',
            startTime: '19:00',
            endTime: '23:00',
            customerCode: 'LGFO18',
            selectDropdownValue: 'HJBT JBVAN',
            zero: 0

        }
    }
    public static Tc_131713: any = {
        'data': {
            BoardCode1: "G19",
            BoardCode2: "G20",
            BoardCode3: "G23",
            BoardCode4: "G18",
            originValue: 'LGFO18',
            value: '262',
            fleetValue: 'DCS LDC833',
            startTime: '19:00',
            endTime: '23:00',
            customerCode: 'LGFO18',
            selectDropdownValue: 'HJBT JBVAN',
            zero: 0,
            sucessMessage: 'Tractor Preplan Successful',

        }
    }
    public static Tc_131715: any = {
        'data': {
            BoardCode1: "LR1",
            BoardCode2: "L1R",
            BoardCode3: "G19",
            BoardCode4: "G23",
            originValue: 'LGFO18',
            value: '262',
            fleetValue: 'DCS LDC833',
            startTime: '19:00',
            endTime: '23:00',
            customerDropDown: "CUSTOMER",
            customerCode: 'LGFO18',
            selectDropdownValue: 'HJBT JBVAN',
            zero: 0,
            sucessMessage: 'Tractor Preplan Successful',
            trlr: 'JBHZ',
            dispatchMessage: 'DISPATCHED',
            shipper: 'SHIPPER',
            floor: 'FLOOR',
            driverCount: 'N',
            days: 0,
            futureDays: 1,
            continueBookingButton: "Continue Booking",
            LoadSucessMessage: 'LOAD UPDATED SUCCESSFULLY'


        }
    }
    public static Tc_131724: any = {
        'data': {
            BoardCode1: "LR1",
            BoardCode2: "L1R",
            BoardCode3: "G18",
            BoardCode4: "G19",
            originValue: 'LGFO18',
            value: '262',
            fleetValue: 'DCS LDC833',
            startTime: '19:00',
            endTime: '23:00',
            customerDropDown: "CUSTOMER",
            customerCode: 'LGFO18',
            selectDropdownValue: 'HJBT JBVAN',
            zero: 0,
            sucessMessage: 'Tractor Preplan Successful',
            trlr: 'JBHZ',
            dispatchMessage: 'DISPATCHED',
            shipper: 'SHIPPER',
            floor: 'FLOOR',
            driverCount: 'N',
            days: 0,
            futureDays: 1,
            continueBookingButton: "Continue Booking",
            LoadSucessMessage: 'LOAD UPDATED SUCCESSFULLY',
            constant: 1,
            weight: 500,
            pickUpDestination: 'JBHZ'

        }
    }
    public static Tc_127243: any = {
        'data': {
            // username: 'jcnt491',
            // password: 'jb0848',
            paceLink: 'PACE',
            dropDownOption: 'Account',
            dropDownAccountOption: 'Whirlpool LDCN - TULOKX',
            saveButton: 'Save',
            orderLookUpLink: 'Order Lookup',
            statusOfOrderDropDown: 'Status of Order',
            statusOfOrderDropDownSelect: 'Empty',
            loadClassificationDropDown: 'Load Classification',
            loadClassificationDropDownSelect: 'Whirlpool LDCN',
            editTrip: 'Edit Trip',
            orderNumberDropDown: 'Order Nbr',
            nextButton: 'Next',
            previousButton: 'Previous',
            lastOrder: 'last',
            tenthOrder: 'middle',
            topOrder: 'first'
        }
    }
    public static Tc_94569: any = {
        'data': {
            username: 'jcnt491',
            password: 'jb0848',
            paceLink: 'PACE',
            dropDownOption: 'Account',
            dropDownAccountOption: 'Whirlpool LDCN - AUSTXX',
            saveButton: 'Save',
            orderLookUpLink: 'Order Lookup',
            editTrip: 'Edit Trip',
            commingleOrder: 'Commingle Order',
            valueToSelect: 'Builder Direct',
            customerServiceLink: 'Customer Services',
            checkBox: 'Reconcile View',
            stopDetailsRow: '4',
            columnText: 'Customer\nCode',
            columnText1: 'City/State\nCode',
            columnText2: 'Stop Class'
        }
    }
    public static Tc_95046: any = {
        'data': {
             username: 'jcnt491',
             password: 'jb0848',
            paceLink: 'PACE',
            dropDownOption: 'Account',
            dropDownAccountOption: 'Whirlpool LDCN - AUSTXX',
            saveButton: 'Save',
            orderLookUpLink: 'Order Lookup',
            billingPeriodRadioButton: 'BillingPeriod',
            editTrip: 'Edit Trip',
            commingleOrder: 'Commingle Order',
            editButton: 'Edit',
            dropDownLoadClasification: 'Whirlpool LDCN',
            updateButton: 'Update',
            cancelButton: 'Cancel'
        }
    }

    public static Tc_87107: any = {
        'data': {
            appLink: 'Enterprise Order Management',
            originInputFiled: 'CCBDA',
            skeletonList: 0,
            loadDetailsVerification: 'Enterprise Order Management - NEW LOAD',
            verifyPickScreenTitle: 'Select Pickup date',
            projectCode: 'S001',
            beginingTime: '19:00',
            endTime: '23:00',
            carrierText: 'MGAS',
            carrierInformationText: 'Please Enter Carrier information',
            carrierInformationValue: 'MGAS - MORGAN SOUTHERN INC',
            amount: '1000',
            firstName: 'Pickle',
            lastName: 'Rick',
            unlistedEmail: 'Unlisted Email Address',
            emailField: 'Jared.Shepherd@jbhunt.com',
            emailDropdown: 'BALUNGOS_911@YAHOO.COM',
            emailResults: 1,
            phoneNumber: '(479) 123 - 4448',
            successMessage: 'You have successfully created an offer MORGAN SOUTHERN INC',
            carrierRate: '$1,000',
        }
    }
    public static Tc_99816: any = {
        'data': {
            textBoxValue: 'CLELA2',
            crSearchResults: 1,
            months: 3,
            customerRequests: 2,
            fleetCode: 'LTL',
        }
    }

    public static Tc_99817: any = {
        'data': {
            textBoxValue: 'CLELA2',
            crSearchResults: 1,
            months: 3,
            customerRequests: 2,
            fleetCode: 'LTL',
        }
    }

    public static Tc_102083: any = {
        'data': {
            selectTypeDropdown: 'FUEL_GRP',
            fuelProgramInputOne: 'Test QA',
            newGroupButton: 'New Group',
            fuelSurchargeText: 'Fuel Surcharge Grouping',
            addButton: 'Add',
            affialationText: 'Affiliation List',
            dsakeField: 'DSAKE',
            hjbtField: 'HJBT JBVAN',
            saveIcon: 'Save',
            jbvanText: 'HJBT JBVAN',
            removeButton: 'Remove',
            successMessage: '1 affiliation(s) successfully removed.',




        }

    }
    public static Tc_102106: any = {
        'data': {
            fuelPrice: '123',
        }

    }

    public static Tc_102089: any = {
        'data': {
            calenderType: 'holiday',
            searchButton: 'Search',
            calenderText: 'Calendar Type Selection',
            chooseButton: 'Choose',
            calenderSetUp: 'Calendar Setup',
            addButton: 'Add',
            createCalender: 'Create Calendar',
            continueButton: 'Continue',
            doeDate: '2024-09-10',
            effectiveDate: '2024-09-10',
            expirationDate: '2024-09-11',
            deleteButton: 'Delete',
            deleteMessage: '1 setup(s) removed successfully.',
            true: true,
        }

    }
    public static Tc_102075: any = {
        'data': {
            typeDropDown: 'BILLTO_DIV',
            dsakeInputField: 'dsake',
            hjbtInputField: 'hjbt jbvan',
            findGroupButton: 'Find Group',
            multiPleSelection: 'Multiple Group Selection',
            cancelButton: 'Cancel',
            findProgramButton: 'Find Program',
            fuelSurchargeText: 'Fuel Surcharge Program',
            true: true,
        }

    }

    public static Tc_94630: any = {
        'data': {
            username: 'jcnt494',
            password: 'jb0851',
            paceLink: 'PACE',
            accountLabel: 'Account',
            accountValue: 'Whirlpool LDCN - AUSTXX',
            saveButton: 'Save',
            orderLookUpLink: 'Order Lookup',
            commingleOrder: 'Commingle Order',
            editTripButton: 'Edit Trip',
            rownumber: '3',
            stopUpdateTitle: 'Stop Update',
            customerServicesTitle: 'Customer Services',
            previousOrderNumberButtonId: 'btnPreviousOrderNbr',
            NextOrderNumberButtonId: 'btnNextOrderNbr',
            previousStopNumberButtonId: 'btnPreviousStopNbr',
            nextStopNumberButtonId: 'btnNextStopNbr',
            first: 'first',
            last: 'last'
        }
    }

    public static Tc_94626: any = {
        'data': {
            username: 'jcnt494',
            password: 'jb0851',
            paceLink: 'PACE',
            billingPeriodRadioButton: 'BillingPeriod',
            orderStatus: 'EMPTY',
            accountLabel: 'Account',
            accountValue: 'Whirlpool LDCN - AUSTXX',
            saveButton: 'Save',
            orderLookUpLink: 'Order Lookup',
            commingleOrder: 'Commingle Order',
            editTripButton: 'Edit Trip',
            rownumber: '3',
            stopUpdateTitle: 'Stop Update',
            customerServicesTitle: 'Customer Services',
            previousOrderNumberButtonId: 'btnPreviousOrderNbr',
            NextOrderNumberButtonId: 'btnNextOrderNbr',
            previousStopNumberButtonId: 'btnPreviousStopNbr',
            nextStopNumberButtonId: 'btnNextStopNbr',
            copyMissingServicesButton: 'Copy Missing Services',
            exitButton: 'Exit'
        }
    }

    public static Tc_94618: any = {
        'data': {
            username: 'jcnt494',
            password: 'jb0851',
            paceLink: 'PACE',
            billingPeriodRadioButton: 'BillingPeriod',
            orderStatus: 'EMPTY',
            accountLabel: 'Account',
            accountValue: 'Whirlpool LDCN - AUSTXX',
            saveButton: 'Save',
            orderLookUpLink: 'Order Lookup',
            commingleOrder: 'Commingle Order',
            editTripButton: 'Edit Trip',
            rownumber: '3',
            stopUpdateTitle: 'Stop Update',
            customerServicesTitle: 'Customer Services',
            previousOrderNumberButtonId: 'btnPreviousOrderNbr',
            NextOrderNumberButtonId: 'btnNextOrderNbr',
            previousStopNumberButtonId: 'btnPreviousStopNbr',
            nextStopNumberButtonId: 'btnNextStopNbr',
            copyMissingServicesButton: 'Copy Missing Services',
            exitButton: 'Exit'
        }
    }

    public static Tc_95203: any = {
        'data': {
            paceAdminLink: "PACE Admin",
            orderRetriggerLink: "Order Retrigger",
            orderInputTypeManualButton: "orderInputTypeManual",
            orderNumberTextAreaName: "orderNumberTextArea",
            actionsRadioButton: "DelRetrigRadio",
            paceLink: 'PACE',
            saveButton: 'Save',
            searchButton: 'Search',
            mainMenuLink: 'Main Menu',
            initiatePayroll: 'Initiate Payroll',
            payrollAdjustment: 'Payroll Adjustment',
            orderLookUpLink: 'Order Lookup',
            billingPeriodRadioButton: 'BillingPeriod',
            orderStatus: 'EMPTY',
            editTripButton: 'Edit Trip',
            exitButton: 'Exit',
            preferencesLink: "Preferences",
            homeButton: 'Home',
            cancelButton: 'Cancel',
            submitButton: 'Submit',
            approveButton: 'Approve',
            username: 'jcnt491',
            password: 'jb0848',
            dropDownOption: "Account",
            dropDownCityOption: "Whirlpool LDCN - AUSTXX",
            successMessage: "Successfully Processed Orders",
            jbhOrderButton: "JBH Order #",
            emptyMiles: "dtl_totEmptyMiles",
            deadHeadMiles: "dtl_totDeadheadMiles",
            loadedMiles: "dtl_totLoadedMiles",
            bobTailMiles: "dtl_totBobtailMiles",
            totalMiles: "dtl_totMiles",
            true: true,
        }

    }

    public static Tc_94726: any = {
        'data': {
            username: 'jcnt494',
            password: 'jb0851',
            paceLink: 'PACE',
            accountLabel: 'Account',
            accountValue: 'Whirlpool LDCN - AUSTXX',
            saveButton: 'Save',
            orderLookUpLink: 'Order Lookup',
            commingleOrder: 'Commingle Order',
            orderDropDownStatus: 'EMPTY',
            billingPeriodRadioButton: 'BillingPeriod',
            editTripButton: 'Edit Trip',
        }
    }

    public static Tc_95038: any = {
        'data': {
            paceLink: 'PACE',
            saveButton: 'Save',
            searchButton: 'Search',
            mainMenuLink: 'Main Menu',
            initiatePayroll: 'Initiate Payroll',
            payrollAdjustment: 'Payroll Adjustment',
            orderLookUpLink: 'Order Lookup',
            billingPeriodRadioButton: 'BillingPeriod',
            orderStatus: 'EMPTY',
            editTripButton: 'Edit Trip',
            exitButton: 'Exit',
            cancelButton: 'Cancel',
            submitButton: 'Submit',
            approveButton: 'Approve',
            payrollConfirmButton: 'Payroll Confirm',
            entireRadioButton: 'Entire Account',
            username: 'jcnt882',
            password: 'jb7932',
            accountLabel: 'Account',
            accountValue: 'Certainteed Corporation -ED1NJ',
            commentOnPaySummary: 'TEST',
            successMessage: 'Payroll Approval Confirmed for Pay Period End Date',
            value_Array: ['LS26765', '1', '2', '2', 'Certainteed Corporation -ED1NJ RGNDVR - JBH Employee', 'BATISTA', 'Clean Trailer Deduction', 'Cubic Feet'],    // ADAMS
        }

    }
    public static Tc_95193: any = {
        'data': {
            paceLink: 'PACE',
            saveButton: 'Save',
            orderLookUpLink: 'Order Lookup',
            billingPeriodRadioButton: 'BillingPeriod',
            orderStatus: 'EMPTY',
            editTripButton: 'Edit Trip',
            exitButton: 'Exit',
            cancelButton: 'Cancel',
            username: 'jcnt491',
            password: 'jb0848',
            accountLabel: 'Account',
            accountValue: 'Whirlpool LDCN - AUSTXX',
            orderDropDownStatus: 'EMPTY',
            loadClassificationDropdownValue: 'WHIRLPOOL',
            loadClassification: 'Whirlpool LDCN',
            billingPeriodEndDate: '2/3/18',
            orders_3: 3,
            nextOrderButton: 'NextOrder',
            previousOrderButton: 'PreviousOrder',
            previousButton: 'Previous',
            nextButton: 'Next',
            lastOrderNumber: 'last',
            firstOrderNumber: 'first',
            middleOrderNumber: 'middle'
        }
    }
    public static Tc_95041: any = {
        'data': {
            paceLink: 'PACE',
            saveButton: 'Save',
            orderLookUpLink: 'Order Lookup',
            billingPeriodRadioButton: 'BillingPeriod',
            orderStatus: 'EMPTY',
            editTripButton: 'Edit Trip',
            exitButton: 'Exit',
            cancelButton: 'Cancel',
            username: 'jcnt491',
            password: 'jb0848',
            accountLabel: 'Account',
            accountValue: 'Whirlpool LDCN - AUSTXX',
            verifyAccount: 'Account : Whirlpool LDCN - AUSTXX',
            verifyAccountTripPage: 'Whirlpool LDCN - AUSTXX',
            classificationDropDown: 'HOMEDELVR',
            routeDetailsResults: 2,
            productInformation: 1,
            stopDetailsRow: 4,
            stopUpdateTitle: 'Stop Update',
            editTripPageTitle: 'Edit Trip',
            loadClassificationDropdownValue: 'BLDRINDRCT',
            accountUsed: 'Account: Whirlpool LDCN - AUSTXX',
            productDetailText: 'Product Detail'
        }
    }

    public static Tc_95210: any = {
        'data': {
            username: 'jcnt489',
            password: 'jb0846',
            accountLabel: 'Account',
            accountValue: 'Goodman Mfg',
            MainMenuLink: 'Activity Create',
            activityDropDown: 'Activity Type',
            activityTextValue: 'Miscellaneous',
            dropDownActivity: 'Activity',
            dropDownClassification: 'Classification',
            //ActivityClassificationValue:'',
            dropDownValue: 'SPTR',
            dropDownDriver: 'Driver',
            dropDownAgreement: 'Agreement',
            driverAgreementValue: '10',
            selectDriver: 'Driver',
            driverValue: 'ALLM6',
            dropDownActivity1: 'Activity',
            dropDownPerformed: 'Performed',
            activityPerformedValue: 'Lumper',
            performedValue: 'Test',
            dropDownActivity2: 'Activity',
            dropDownPerformed2: 'Performed',
            byValue: 'Shipper Address',
            truckNumber: '324674',
            customerReferenceNumberOrType: 'CustomerReferenceNumber',
            customerReferenceNumberValue: '12345',
            trPrefixNumber: 'TR-PREFIX / NUMBER',
            exit: 'Exit',
            mileageType: 'HUB',
            quantity: 'quantity',
            quantityValue: '100',
            mileageClassification: 'LOADED',
            addMiles: 'Add Miles',
            save: 'Save',
            customerSpecificMeasure: 'SHIFT1',
            customerSpecificValue: '10',
            locationInformation: 'Customer Name / City-State',
            customerCode: 'KFGA',
            go: 'Go',
            locationRole: 'SHPADR',
        }
    }

    public static Tc_94606: any = {
        'data': {
            paceLink: 'PACE',
            saveButton: 'Save',
            orderLookUpLink: 'Order Lookup',
            billingPeriodRadioButton: 'BillingPeriod',
            orderStatus: 'EMPTY',
            editTripButton: 'Edit Trip',
            username: 'jcnt491',
            password: 'jb0848',
            accountLabel: 'Account',
            accountValue: 'Whirlpool LDCN - AUSTXX',
            comment: 'QA Test',
            true: true,

        }

    }

    public static Tc_94601: any = {
        'data': {
            paceLink: 'PACE',
            saveButton: 'Save',
            orderLookUpLink: 'Order Lookup',
            billingPeriodRadioButton: 'BillingPeriod',
            orderStatus: 'EMPTY',
            editTripButton: 'Edit Trip',
            username: 'jcnt491',
            password: 'jb0848',
            accountLabel: 'Account',
            accountValue: 'Cornerstone LDCN - BALMDX',
            comment: 'QA Test',
            true: true,
            referenceNumber: '265102',

        }

    }

    public static Tc_94591: any = {
        'data': {
            paceLink: 'PACE',
            saveButton: 'Save',
            orderLookUpLink: 'Order Lookup',
            billingPeriodRadioButton: 'BillingPeriod',
            orderStatus: 'EMPTY',
            editTripButton: 'Edit Trip',
            username: 'jcnt491',
            password: 'jb0848',
            accountLabel: 'Account',
            accountValue: 'Cornerstone LDCN - BALMDX',
            comment: 'QA Test',
            true: true,
            referenceNumber: '265102',

        }

    }

    public static Tc_90311: any = {
        'data': {
            simonNowPageTitle: 'SimonNow',
            division: 'division',
            searchType: 'searchType',
            dateBasis: 'dateBasis',
            searchTypeDropDownOption: 'Publication',
            dateBasisDropDownOption: 'Currently Active',
            pubName: 'danco',
            pubNameText: 'DANCO',
            resetForm: 'Reset Form'


        }
    }

    public static Tc_92617: any = {
        'data': {
            simonNowPageTitle: 'SimonNow',
            division: 'division',
            searchType: 'searchType',
            dateBasis: 'dateBasis',
            searchTypeDropDownOption: 'Publication',
            dateBasisDropDownOption: 'Currently Active',
            pubName: 'dan Test',
            pubNameText: 'DAN TEST COMPANY',
            tabName: 'Item',
            sectionOption: '123456789 - DAN',
            newItemButton: 'New Item',
            code: '987654321',
            description: 'test description',
            updateButton: 'Update',
            itemSavedText: 'Item saved',
            expiryDate:'01/01/2050'
        }
    }


    public static Tc_136081: any = {
        'data': {
            activityWorkflowLink: 'Activity Workflow',
            activityPayPeriod: 'UPDATE 05/06/2018 - 05/12/2018',
            payPeriodValue: '05/06/2018 - 05/12/2018',
            activityDate: '05/06/2018 -- SUN',
            activityBoard: 'N3A',
            activityDriver: 'ALLD9',
            search: 'Search',
            iPayTitle: 'iPay - Pay Driver Quickly',
            locationDropDownValue: 'JBI ANLA',
            payPeriodDropDownValue: 'UPDATE 05/06/2018 - 05/12/2018',
            save: 'Save',
            driverActivityMenuText: 'Driver Activity Menu',
            exit: 'Exit',
        }
    }

    public static Tc_125124: any = {
        'data': {
            iPayTitle: 'iPay - Pay Driver Quickly',
            locationDropDownValue: 'JBI ANLA',
            payPeriodDropDownValue: 'UPDATE 07/01/2018 - 07/07/2018',
            activityLookUpLink: 'Activity Lookup',
            search: 'Search',
            save: 'Save',
            activityPayPeriod: 'UPDATE 05/06/2018 - 05/12/2018',
            payPeriodValue: '05/06/2018 - 05/12/2018',
            activityDate: '05/06/2018 -- SUN',
            driverActivityMenuText: 'Driver Activity Menu',
            activityBoard: 'N3A',
            activityDriver: 'ALLD9',
            exit: 'Exit'
        }
    }

    public static Tc_113180: any = {
        'data': {
            iPayTitle: 'iPay - Pay Driver Quickly',
            locationDropDownValue: 'JBI ANLA',
            payPeriodDropDownValue: 'UPDATE 05/06/2018 - 05/12/2018',
            driverActivityMenuText: 'Driver Activity Menu',
            activityWorkflowLink: 'Activity Workflow',
            search: 'Search',
            exceptionPay: 'Exception Pay',
            driverOption: 'DAVRS1',
            activityTypeOption: 'CROSS110.0000 ',
            quantity: '50',
            description: 'Payment',
            save: 'Save',
            exit: 'Exit',
            window: 1,
            updateMessage: 'Activity created successfully.'
        }
    }

    public static Tc_125137: any = {
        'data': {
            iPayTitle: 'iPay - Pay Driver Quickly',
            locationDropDownValue: 'JBI ANLA',
            payPeriodDropDownValue: 'UPDATE 07/01/2018 - 07/07/2018',
            driverActivityMenuText: 'Driver Activity Menu',
            payrollSummaryLink: 'Payroll Summary',
            payDriverQuicklyPageTitle: 'iPay - Pay Driver Quickly',
            search: 'Search',
            board: 'N3A',
            driver: 'ALL ',
            payEndDate: 'UPDATE 07/01/2018 - 07/07/2018',
            exit: 'Exit'
        }
    }

    public static Tc_125144: any = {
        'data': {
            iPayTitle: 'iPay - Pay Driver Quickly',
            locationDropDownValue: 'JBI ANLA',
            payPeriodDropDownValue: 'UPDATE 07/01/2018 - 07/07/2018',
            driverActivityMenuText: 'Driver Activity Menu',
            overHoursReportLink: 'Over Hours Report',
            payDriverQuicklyPageTitle: 'iPay - Pay Driver Quickly',
            search: 'Search',
            board: 'N3A',
            driver: 'ALL ',
            payEndDate: 'UPDATE 07/01/2018 - 07/07/2018',
            exit: 'Exit'
        }
    }

    public static Tc_125169: any = {
        'data': {
            iPayTitle: 'iPay - Pay Driver Quickly',
            locationDropDownValue: 'JBI ANLA',
            payPeriodDropDownValue: 'UPDATE 07/01/2018 - 07/07/2018',
            driverActivityMenuText: 'Driver Activity Menu',
            driverWorkingHoursReportLink: 'Driver Working Hours Report',
            search: 'Search',
            board: 'N3A',
            driver: 'ALL ',
            payEndDate: 'UPDATE 07/01/2018 - 07/07/2018',
            driverAlpha: 'ALLD9',
            exit: 'Exit'
        }
    }

    public static Tc_125836: any = {
        'data': {
            iPayTitle: 'iPay - Pay Driver Quickly',
            locationDropDownValue: 'JBI ANLA',
            payPeriodDropDownValue: 'UPDATE 07/01/2018 - 07/07/2018',
            driverActivityMenuText: 'Driver Activity Menu',
            outsideShuttleOrderSummaryLink: 'Outside Shuttle Order Summary',
            search: 'Search',
            board: 'N3A',
            driver: 'ALLD9',
            payEndDate: 'UPDATE 07/01/2018 - 07/07/2018',
            exit: 'Exit'
        }
    }

    public static Tc_125923: any = {
        'data': {
            iPayTitle: 'iPay - Pay Driver Quickly',
            locationDropDownValue: 'JBI ANLA',
            payPeriodDropDownValue: 'UPDATE 07/01/2018 - 07/07/2018',
            driverActivityMenuText: 'Driver Activity Menu',
            reviewDriverExceptionLink: 'Review Driver Exception',
            search: 'Search',
            payPeriodValue: '07/01/2018 - 07/07/2018',
            activityDate: '07/01/2018 -- SUN',
            board: 'N3A',
            driver: 'ALLD9',
            exit: 'Exit'
        }
    }

    public static Tc_125917: any = {
        'data': {
            iPayTitle: 'iPay - Pay Driver Quickly',
            locationDropDownValue: 'JBI ANLA',
            payPeriodDropDownValue: 'UPDATE 07/01/2018 - 07/07/2018',
            driverActivityMenuText: 'Driver Activity Menu',
            payrollMonitoringReportLink: 'Payroll Monitoring Report',
            search: 'Search',
            exit: 'Exit'
        }
    }

    public static Tc_136076: any = {
        'data': {
            iPayTitle: 'iPay - Pay Driver Quickly',
            locationDropDownValue: 'JBI ANLA',
            payPeriodDropDownValue: 'UPDATE 05/06/2018 - 05/12/2018',
            save: 'Save',
            driverActivityMenuText: 'Driver Activity Menu',
            activityWorkflowLink: 'Activity Workflow',
            search: 'Search',
            exit: 'Exit',
        }

    }

    public static Tc_117929: any = {
        'data': {
            iPayTitle: 'iPay - Pay Driver Quickly',
            locationDropDownValue: 'JBI ANLA',
            payPeriodDropDownValue: 'UPDATE 05/06/2018 - 05/12/2018',
            save: 'Save',
            driverActivityMenuText: 'Driver Activity Menu',
            activityWorkflowLink: 'Activity Workflow',
            search: 'Search',
            exit: 'Exit',
            window: 1,
            updateMessage: 'Activity created successfully.'
        }
    }

    public static Tc_117956: any = {
        'data': {
            iPayTitle: 'iPay - Pay Driver Quickly',
            locationDropDownValue: 'JBI ANLA',
            payPeriodDropDownValue: 'UPDATE 05/06/2018 - 05/12/2018',
            driverActivityMenuText: 'Driver Activity Menu',
            activityWorkflowLink: 'Activity Workflow',
            activityPayPeriod: 'UPDATE 05/06/2018 - 05/12/2018',
            payPeriodValue: '05/06/2018 - 05/12/2018',
            activityDate: '05/06/2018 -- SUN',
            activityBoard: 'N3A',
            activityDriver: 'ALLD9',
            search: 'Search',
            tractorNumber: '123456',
            beginTime: '01:00',
            endTime: '16:00',
            beginHub: '10',
            endHub: '100',
            miles: '90',
            hours: '15.0',
            validateAndSave: 'Validate and Save',
            savedMessage: 'Successfully Saved ',
        }
    }

    public static Tc_117954: any = {
        'data': {
            iPayTitle: 'iPay - Pay Driver Quickly',
            locationDropDownValue: 'JBI ANLA',
            payPeriodDropDownValue: 'UPDATE 05/06/2018 - 05/12/2018',
            save: 'Save',
            driverActivityMenuText: 'Driver Activity Menu',
            activityWorkflowLink: 'Activity Workflow',
            search: 'Search',
            exit: 'Exit',
            activityPayPeriod: 'UPDATE 05/06/2018 - 05/12/2018',
            payPeriodValue: '05/06/2018 - 05/12/2018',
            activityDate: '05/06/2018 -- SUN',
            activityBoard: 'N3A',
            activityDriver: 'ALLD9',
            tractorNumber: '123456',
            beginTime: '01:00',
            endTime: '16:00',
            beginHub: '10',
            endHub: '100',
            miles: '90',
            hours: '15.0',
            validateAndSave: 'Validate and Save',
            savedMessage: 'Successfully Saved '
        }
    }

    public static Tc_114584: any = {
        'data': {
            iPayTitle: 'iPay - Pay Driver Quickly',
            locationDropDownValue: 'JBI ANLA',
            payPeriodDropDownValue: 'UPDATE 05/06/2018 - 05/12/2018',
            save: 'Save',
            driverActivityMenuText: 'Driver Activity Menu',
            activityWorkflowLink: 'Activity Workflow',
            search: 'Search',
            exit: 'Exit',
            activityPayPeriod: 'UPDATE 05/06/2018 - 05/12/2018',
            payPeriodValue: '05/06/2018 - 05/12/2018',
            activityDate: '05/06/2018 -- SUN',
            activityBoard: 'N3A',
            activityDriver: 'ALLD9',
            windowNumber: '1',
            miscAdjustmentButton: 'Misc. Adjustment',
            invaldMessage: 'Invalid activity type.Invalid quantity.Invalid rate.',
            invalidQuantityAndRateMessage: 'Invalid quantity.Invalid rate.',
            invalidRate: 'Invalid rate.',
            driverOption: 'POUN ',
            activityTypeOption: 'DETENT17.0000 ',
            measure: 'EACH',
            quantity: '5',
            actualRate: '20',
            description: 'QA Test 123',
            invalidDescription: 'Invalid Description. A description of payment is required..',
            adjustemntCreatedMessage: 'Adjustment created successfully.'
        }
    }

    public static Tc_136080: any = {
        'data': {
            iPayTitle: 'iPay - Pay Driver Quickly',
            locationDropDownValue: 'JBI ANLA',
            payPeriodDropDownValue: 'UPDATE 05/06/2018 - 05/12/2018',
            driverActivityMenuText: 'Driver Activity Menu',
            activityWorkflowLink: 'Activity Workflow',
            activityPayPeriod: 'UPDATE 05/06/2018 - 05/12/2018',
            payPeriodValue: '05/06/2018 - 05/12/2018',
            activityDate: '05/06/2018 -- SUN',
            activityBoard: 'N3A',
            activityDriver: 'ALLD9',
            search: 'Search',
        }
    }

    public static Tc_113179: any = {
        'data': {
            iPayTitle: 'iPay - Pay Driver Quickly',
            locationDropDownValue: 'JBI ANLA',
            payPeriodDropDownValue: 'UPDATE 05/06/2018 - 05/12/2018',
            driverActivityMenuText: 'Driver Activity Menu',
            activityWorkflowLink: 'Activity Workflow',
            activityPayPeriod: 'UPDATE 05/06/2018 - 05/12/2018',
            payPeriodValue: '05/06/2018 - 05/12/2018',
            activityDate: '05/06/2018 -- SUN',
            activityBoard: 'N3A',
            activityDriver: 'ALLD9',
            search: 'Search',
            exceptionPay: 'Exception Pay',
            driverOption: 'POUN      ',
            windowNumber: '1',
            activityTypeOption: 'DETENT17.0000 ',
            measure: 'EACH',
            quantity: '1',
            description: 'QA Test123',
            save: 'Save',
            saveAndNew: 'Save & New',
            exit: 'Exit',
            updateMessage: 'Activity created successfully.',
            invalidActivityCreationMessage: 'Invalid activity type.Invalid quantity.Invalid Either an order number or a short description is required..'
        }
    }

    public static Tc_124807: any = {
        'data': {
            iPayTitle: 'iPay - Pay Driver Quickly',
            locationDropDownValue: 'JBI ANLA',
            payPeriodDropDownValue: 'UPDATE 05/06/2018 - 05/12/2018',
            save: 'Save',
            driverActivityMenuText: 'Driver Activity Menu',
            miscellaneousAdjustmentLink: 'Miscellaneous Adjustment',
            search: 'Search',
            exit: 'Exit',
            activityBoard: 'N3A',
            activityDriver: 'ALLD9',
            windowNumber: '1',
            activityTypeOption: 'DETENT17.0000 ',
            measure: 'HOUR',
            quantity: '5',
            actualRate: '1',
            description: 'QA Test 123',
            adjustemntCreatedMessage: 'Adjustment created successfully.'
        }
    }

    public static Tc_139821: any = {
        'data': {
            loginTitle: 'CD-RAP - Logon',
            username: 'jcnt489',
            password: 'jb0846',
            submit: 'Submit',
            cdrapHomeTitle: 'CD-RAP - Welcome',
            confirmationLink: 'Confirmation',
            confirmationSearchTitle: 'Confirmation Search',
            fromDateMM: '01',
            apptTypeRoadTestValue: '100155',
            search: 'Search'
        }
    }

    public static Tc_141393: any = {
        'data': {
            loginTitle: 'CD-RAP - Logon',
            username: 'jcnt489',
            password: 'jb0846',
            submit: 'Submit',
            cdrapHomeTitle: 'CD-RAP - Welcome',
            companyAdminLink: 'Company Admin',
            companyAdminTitle: 'CD-RAP',
            reportAgencyValue: '108003',
            reportTypeValue: '100273',
            add: 'Add',
            ssnTrace: 'SSN Trace',
            cdlisReport: 'CDLIS',
            cancel: 'Cancel',
            driverIQ: 'DriverIQ'
        }
    }
    public static Tc_141394: any = {
        'data': {
            loginTitle: 'CD-RAP - Logon',
            username: 'jcnt489',
            password: 'jb0846',
            submit: 'Submit',
            cdrapHomeTitle: 'CD-RAP - Welcome',
            companyAdminLink: 'Company Admin',
            companyAdminTitle: 'CD-RAP',
            templateName: 'Test123',
            templateDescription: '123Test'
        }
    }

    public static Tc_141388: any = {
        'data': {
            loginTitle: 'CD-RAP - Logon',
            username: 'jcnt489',
            password: 'jb0846',
            submit: 'Submit',
            cdrapHomeTitle: 'CD-RAP - Welcome',
            companyAdminLink: 'Company Admin',
            companyAdminTitle: 'CD-RAP',
            chargeTypeValue: 'Felony',
            categoryValue: 'Assault and other violent crimes',
            felonyChargeTypeValue: '100362',
            search: 'Search',
            criminalCrossReferenceItems: '(118 Found.)',
            felonyCategoryValue: '233852',
            criminalCrossReference45Items: '(45 Found.)',
            misdemeanorChargeTypeValue: '100363',
            misdemeanorcategoriescategoryValue: '233855',
            trafficChargeTypeValue: '232331',
            trafficCategoriescategoryValue: '233891',
            internationalChargeTypeValue: '234178',
            internationalCategoriescategoryValue: '234179',
        }
    }

    public static Tc_141395: any = {
        'data': {
            positionsLink: 'Positions',
            positionsPipelineSummaryTitle: 'Pipeline Summary',
            pipeonlyStateDropDownValue: '161',
            search: 'Search',
            editJob: 'Edit Job',
            one: '1',
            zero: '0',
            reset: 'Reset',
            createNew: 'Create New',
            createNewJob: 'Create New Job',
            pipeonlyLocationDropDownValue: 'LOWAR01',
            hrJobDetailTitle: 'CD-RAP',
            close: 'Close'
        }
    }

    public static Tc_141390: any = {
        'data': {
            loginTitle: 'CD-RAP - Logon',
            username: 'jcnt489',
            password: 'jb0846',
            submit: 'Submit',
            cdrapHomeTitle: 'CD-RAP - Welcome',
            companyAdminLink: 'Company Admin',
            companyAdminTitle: 'CD-RAP',
            pendingDecline: '234120',
            pendingDeclineText: '*Pending Decline',
            pendingDeclineStatus: 'Contact',
            accidents: '232564',
            accidentsStatus: 'No Hire',
            accidentsText: 'Accidents',
            death: '100768',
            deathText: 'Death',
            deathStatus: 'Deceased',
            earlyRetirement: '100772',
            earlyRetirementText: 'Early Retirement',
            earlyRetirementStatus: 'No Recruit',
            interviewRequirementMet: '233792',
            interviewRequirementMetText: 'Interview Requirement Met',
            interviewRequirementMetStatus: 'Active',
            interviewRequirementMetDescription: 'Interview Not Required'
        }
    }

    public static Tc_134541: any = {
        'data': {
            centralCustomerInformationLink: 'Central Customer Information ',
            cciPageTitle: 'Central Customer Information - Pending Site Listing'
        }
    }

    public static Tc_134593: any = {
        'data': {
            centralCustomerInformationLink: 'Central Customer Information ',
            cciPageTitle: 'Central Customer Information - Pending Site Listing',
            customerCode: 'INPR3',
            billTo: 'SHIPPER',
            cemText: 'CEMT10'

        }
    }

    public static Tc_135572: any = {
        'data': {
            centralCustomerInformationLink: 'Central Customer Information ',
            cciPageTitle: 'Central Customer Information - Pending Site Listing',
            customerCode: 'INPR3',
            billTo: 'SHIPPER',
            cemText: 'CEMT10'

        }
    }

    public static Tc_135021: any = {
        'data': {
            appLink: '360 Platform',
            platformPageTitle: 'J.B. Hunt 360',
            pageTitle: 'Account',
            accountSearchInputFieldValue: 'INGRBR',
            detentionp: 'DETENTIONP'
        }
    }

    public static TC_90971: any = {
        'data': {
            newPublicatioButton: 'New Publication',
            simonNowPageTitle: 'SimonNow',
            typeDropDownOption: 'CARRIER',
            customFormatDropDownOption: 'JBH',
            updateButton: 'Update',
            instructions: 'Test',
            publicationSavedSucessMessage: 'Publication saved successfully.',

        }
    }
    public static Tc_87110: any = {
        'data': {
            origin: 'origin',
            cityOrigin: 'East Chicago, IL',
            destination: 'destination',
            destinationCity: 'Haslett',
            equipmentDropDown: 'Dry Van',
            'city1': { sourceCity: "East Chicago, IL", desCity: "Haslett" }


        }
    }
    public static Tc_113642: any = {
        'data': {
            url: 'http://hawkonescreen.jbhunt.com/HawkOneScreen/authenticate/authenticateAction.do?method=forwardUser',
            changeForm: 'apptChangeForm',
            facility: 'driverFacility',
            publicationResults: 'publication',
            commentsForm: 'commentsForm',
            closingForm: 'closingForm',
            maintenanceForm: 'maintenanceForm',
            loadForm: 'loadForm'

        }
    }
    public static Tc_110851: any = {
        'data': {
            selectDivision: 'HJBT JBVAN',
            project: 'A!01',

        }
    }
    public static Tc_110852: any = {
        'data': {
            selectDivision: 'HJBT JBVAN',
            project: 'A!01',
            carrier: 'ALL',
            constant: 0,
            invoiceTab: 'Create Invoice',
            mgCarrier: 'MGAS',
            startDate: '03/01/2018',
            endDate: '05/23/2018',
            paymentTab: 'Payment History',

        }
    }
    public static Tc_110850: any = {
        'data': {
            selectDivision: 'HJBT JBVAN',
            project: 'A!01',

        }
    }
    public static Tc_126217: any = {
        'data': {
            url: 'http://jvpweb00201.jbhunt.com/maximo/webclient/login/login.jsp?welcome=true',
            username: 'jmnt867',
            password: 'test123',
            itemNumber: '853986',
            storeRoom: 'GENOF-INV',
            standardCost: '50.00',
            currentBalance: '20.00',
            maximoTitle: 'Welcome to Maximo',
            description: 'Creating item'
        }
    }

    public static Tc_126721: any = {
        'data': {
            appLink: '360 Platform',
            platformPageTitle: 'J.B. Hunt 360',
            pageTitle: 'Supply Chain Management',
            optionName: 'Team Management',
            optionSCNEAB: 'SCNEAB',
            optionCustomerExperience: 'Experience',
            optionActive: 'Active',
            optionInActive: 'Inactive',
            searchText: 'Jared Shepherd'
        }
    }

    public static Tc_126714: any = {
        'data': {
            appLink: '360 Platform',
            platformPageTitle: 'J.B. Hunt 360',
            pageTitle: 'Supply Chain Management',
            optionName: 'User Management',
            optionSCNEAB: 'SCNEAB',
            optionCustomerExperience: 'Experience',
            optionActive: 'Active',
            optionInActive: 'Inactive',
            optionTaskName: 'Task Name ',
            optionTeamName: 'Team Name ',
            optionCCIAccountResponsibility: 'CCI Account Responsibility',
            optionCCILocationResponsibility: 'CCI Location Responsibility',
            optionTestWithANewTeam: 'Test With a New Team',
            optionNextCCI: 'Next CCI'
        }
    }

    public static Tc_127101: any = {
        'data': {
            appLink: '360 Platform',
            platformPageTitle: 'J.B. Hunt 360',
            pageTitle: 'Supply Chain Management',
            optionName: 'Role Management',
            roleAssociation: 'Role Association',
            moduleDropDown: 'Module ',
            taskListDropDown: 'Task List ',
            triggerDropDown: 'Trigger ',
            userRoleDropDown: 'User Role ',
            optionAdministration: 'Administration',
            optionOrderManagement: 'Order Management',
            optionAccount: 'Account',
            optionAppointments: 'Appointments',
            optionCrossTownDelay: 'Cross Town Delay',
            optionExcessiveTransit: 'Excessive Transit',
            optionApplicationSupport: 'Application Support',
            optionAppointmentOwner: 'Appointment Owner'
        }
    }

    public static Tc_41447: any = {
        'data': {
            optionMenuLanes: 'Lanes',
            carriersCarrierCode: 'sof1',
            referenceRowIndex: 2,
            viewCarrierDropdownOptionName: 'View Carriers',
            carriersGridName: 'myLanesCarriersGrid',
            carrierCodeRowIndex: 1,
            expectedCarrierElementText: 'SOF1',
            carrierNumber: 1
        }
    }

    public static Tc_84125: any = {
        'data': {
            optionMenuLanes: 'Lanes',
            carriersCarrierCode: 'sof1',
            referenceRowIndex: 2,
            addCarrierDropdownOptionName: 'Add Carrier',
            carrierInputFieldOrigin: 'Origin City',
            carrierInputFieldDestination: 'Destination City',
            carrierInputFieldVolume: 'Volume',
            carrierInputFieldLane: 'Lane Name',
            carrierInputFieldEquipment: 'Equipment Type',
            carrierInputFieldLaneType: 'Lane Type'
        }
    }

    public static Tc_84122: any = {
        'data': {
            carrierCode: 'HA29',
        }
    }

    public static Tc_41446: any = {
        'data': {
            carrierDropdownOptionName: 'Carriers',
            carrierCode: 'HA29',
            findCarrierButton: 'Find Carriers'
        }
    }

    public static Tc_41448: any = {
        'data': {
            carrierDropdownOptionName: 'Carriers',
            carrierCode: 'HA29',
            findCarrierButton: 'Find Carriers',
            tableIndex: 1,
            viewContactDropDownOption: 'View Contacts',
            editContactDropDownOption: 'Edit Contact',
            firstName: 'SCOTT',
            lastName: 'Mc',
            phoneNumber: '(479) 986-9733',
            updateButton: 'Update',
        }
    }

    public static Tc_126730: any = {
        'data': {
            appLink: '360 Platform',
            platformPageTitle: 'J.B. Hunt 360',
            pageTitle: 'Supply Chain Management',
            optionName: 'Task Management',
            optionDCS: 'DCS',
            optionICS: 'ICS',
            optionBackhaul: 'Backhaul',
            optionBrokerage: 'Brokerage',
            optionActive: 'Active',
            optionInActive: 'Inactive',
            searchText: '360'
        }
    }

    public static Tc_126767: any = {
        'data': {
            appLink: '360 Platform',
            platformPageTitle: 'J.B. Hunt 360',
            pageTitle: 'Supply Chain Management',
            optionName: 'Notification Management',
            optionAccount: 'fltChkAccount',
            optionEDIRelated: 'fltChkEDI Related',
            optionCommitment: 'fltChkCommitment',
            optionEDIErrors: 'fltChkEDI Errors',
            optionOrderDelivered: 'fltChkOrder Delivered',
            optionAppointmentResetNonOrderCreator: 'fltChkAppointment Reset Non-Order Creator',
            optionAssociatedUser: 'fltChkAssociated User',
            optionBillTo: 'fltChkBill To',
            optionAccountText: 'Account',
            optionEDIRelatedText: 'EDI Related',
            optionCommitmentText: 'Commitment',
            optionEDIErrorsText: 'EDI Errors',
            optionOrderDeliveredText: 'Order Delivered',
            optionAppointmentResetNonOrderCreatorText: 'Appointment Reset Non-Order Creator',
            optionAssociatedUserText: 'Associated User',
            optionBillToText: 'Bill To',
            optionGaneshKumarShanmugam: 'fltChkGanesh Kumar Shanmugam',
            optionCarolineSnodgrass: 'fltChkCaroline Snodgrass',
            optionRCON774: 'fltChkRCON774',
            optionActive: 'fltChkActive',
            optionInActive: 'fltChkInActive',
        }
    }

    public static Tc_126654: any = {
        'data': {
            url: 'https://finalmilefleetstatus.jbhunt.com/finalmilefleetstatus/',
            value: 'TEST123',

        }
    }

    public static Tc_110433: any = {
        'data': {
            appLink: 'Asset Administration',
            assetAdministrationTitle: 'Asset Administration',
            tabName: 'Asset',
            tabOption: 'Asset Update',
            assetUpdateTitle: 'Asset Update',
            assetNumber: '327727',
            search: 'Search',
            assetChangeStatus: 'Asset Change Status',
            assetStatusOption: 'WAITRETIRE',
            titleReleaseTo: 'Test1',
            retireReasonCodeOptionSOLD: 'SOLD',
            retireReasonCodeOptionOPER: 'OPER',
            referenceNumber: '1234567890',
            successMessage: 'Successfully updated status of the asset'
        }
    }

    public static Tc_126270: any = {

        'data': {
            maximoTitle: 'Welcome to Maximo',
            username: 'jmnt867',
            password: 'test123',
            StoreroomValue: 'GENOF-INV',
            OrderUnit: 'CYL',
            unitCost: '100',
            itemNumber: '123456',
            ConversionFactor: '1.00',
            company: '0000553053',
            downTerminal: 'DOWN TERMINAL',
            poLinesTab: 'PO Lines',
            newStatus: 'Approved',
            storeRoom: 'GENOF-INV',
            standardCost: '50.00',
            currentBalance: '20.00',
            description: 'Creating item',
            favoriteLinkName: 'Inventory',
            inventoryTitle: 'Inventory (Tr)',
            reorderDetailTab: 'Reorder Details',
            primaryVendorValue: '0000553053_000001',
        }
    }
    public static Tc_126316: any = {

        'data': {
            maximoTitle: 'Welcome to Maximo',
            username: 'jmnt867',
            password: 'test123',
            tabName: 'Assets',
            tabOption: 'Locations (Tr)',
            locationName: 'Random location',


        }
    }
    public static Tc_126300: any = {

        'data': {
            maximoTitle: 'Welcome to Maximo',
            username: 'jmnt867',
            password: 'test123',
            tabName: 'Inventory',
            tabOption: 'Storerooms',



        }
    }

    public static Tc_126185: any = {

        'data': {
            maximoTitle: 'Welcome to Maximo',
            username: 'jmnt867',
            password: 'test123',
            description: "Creating item",

        }
    }

    public static Tc_127146: any = {
        'data': {
            username: 'jcnt491',
            password: 'jb0848',
            accountLabel: 'Account',
            accountValue: 'YKK AP America -CHANC',
            cashExpenseFuelType: 'Fuel',
            cost: '1',
            amount: '1',
            comments: 'test123',
            invoiceValue: ' FUEL-410 FuelSur Rev',
            dropDowndateOption: '06/23/2018',

        }
    }
    public static Tc_127230: any = {
        'data': {
            username: 'jcnt491',
            password: 'jb0848',
            accountLabel: 'Account',
            accountValue: 'YKK AP America -CHANC',
            cashExpenseFuelType: 'FUEL',
            cost: '1',
            amount: '1',
            comments: 'test123',
            invoiceValue: ' FUEL-410 FuelSur Rev',
            dropDowndateOption: '06/23/2018',

        }
    }

    public static Tc_94940: any = {
        'data': {
            username: 'jcnt491',
            password: 'jb0848',
            accountLabel: 'Account',
            accountValue: 'Whirlpool LDCN - AUSTXX',
            paceLink: 'PACE',
            saveButton: 'Save',
            orderLookUpLink: 'Order Lookup',
            editTripButton: 'Edit Trip',

        }
    }
    public static Tc_94944: any = {
        'data': {
            username: 'jcnt491',
            password: 'jb0848',
            accountLabel: 'Account',
            accountValue: 'Whirlpool LDCN - AUSTXX',
            paceLink: 'PACE',
            saveButton: 'Save',
            orderLookUpLink: 'Order Lookup',
            editTripButton: 'Edit Trip',
            yes: 'Y',
            no: 'N',
            otherAccount: 'Joybird LDCN -AUSTXX'

        }
    }
    public static Tc_94741: any = {
        'data': {
            username: 'jcnt491',
            password: 'jb0848',
            accountLabel: 'Account',
            accountValue: 'Whirlpool LDCN - AUSTXX',
            paceLink: 'PACE',
            saveButton: 'Save',
            orderLookUpLink: 'Order Lookup',
            editTripButton: 'Edit Trip',
            yes: 'Y',
            no: 'N',
            otherAccount: 'Joybird LDCN -AUSTXX'

        }
    }
    public static Tc_94655: any = {
        'data': {
            username: 'jcnt491',
            password: 'jb0848',
            accountLabel: 'Account',
            accountValue: 'Whirlpool LDCN - AUSTXX',
            paceLink: 'PACE',
            saveButton: 'Save',
            orderLookUpLink: 'Order Lookup',
            billingPeriodRadioButton: 'BillingPeriod',
            status: 'Empty',
            editTripButton: 'Edit Trip',
            date: '01/20/2018',
            orderStatus: 'EMPTY'

        }
    }
    public static Tc_126272: any = {
        'data': {
            maximoTitle: 'Welcome to Maximo',
            username: 'jmnt867',
            password: 'test123',
            StoreroomValue: 'GENOF-INV',
            OrderUnit: 'CYL',
            unitCost: '100',
            itemNumber: '123456',
            ConversionFactor: '1.00',
            company: '0000553053',
            downTerminal: 'DOWN TERMINAL',
            poLinesTab: 'PO Lines',
            newStatus: 'Approved',
            storeRoom: 'GENOF-INV',
            standardCost: '50.00',
            currentBalance: '20.00',
            description: 'Creating item',
            favoriteLinkName: 'Inventory',
            inventoryTitle: 'Inventory (Tr)',
            reorderDetailTab: 'Reorder Details',
            primaryVendorValue: '0000553053_000001',
        }
    }
    public static Tc_126282: any = {
        'data': {
            maximoTitle: 'Welcome to Maximo',
            username: 'jmnt867',
            password: 'test123',
            StoreroomValue: 'GENOF-INV',
            OrderUnit: 'CYL',
            unitCost: '100',
            itemNumber: '123456',
            ConversionFactor: '1.00',
            company: '0000553053',
            downTerminal: 'DOWN TERMINAL',
            poLinesTab: 'PO Lines',
            newStatus: 'Approved',
            storeRoom: 'GENOF-INV',
            standardCost: '50.00',
            currentBalance: '20.00',
            description: 'Creating item',
            favoriteLinkName: 'Inventory',
            inventoryTitle: 'Inventory (Tr)',
            reorderDetailTab: 'Reorder Details',
            primaryVendorValue: '0000553053_000001',
        }
    }

    public static Tc_126290: any = {
        'data': {
            maximoTitle: 'Welcome to Maximo',
            username: 'jmnt867',
            password: 'test123',
            StoreroomValue: 'GENOF-INV',
            OrderUnit: 'CYL',
            unitCost: '100',
            itemNumber: '123456',
            ConversionFactor: '1.00',
            company: '0000553053',
            downTerminal: 'DOWN TERMINAL',
            poLinesTab: 'PO Lines',
            newStatus: 'Approved',
            storeRoom: 'GENOF-INV',
            standardCost: '50.00',
            currentBalance: '20.00',
            description: 'Creating item',
            favoriteLinkName: 'Inventory',
            inventoryTitle: 'Inventory (Tr)',
            reorderDetailTab: 'Reorder Details',
            primaryVendorValue: '0000553053_000001',
        }
    }
    public static Tc_126294: any = {
        'data': {
            maximoTitle: 'Welcome to Maximo',
            username: 'jmnt867',
            password: 'test123',
            StoreroomValue: 'GENOF-INV',
            OrderUnit: 'CYL',
            unitCost: '100',
            itemNumber: '123456',
            ConversionFactor: '1.00',
            company: '0000553053',
            downTerminal: 'DOWN TERMINAL',
            poLinesTab: 'PO Lines',
            newStatus: 'Approved',
            storeRoom: 'GENOF-INV',
            standardCost: '50.00',
            currentBalance: '20.00',
            description: 'Creating item',
            favoriteLinkName: 'Inventory',
            inventoryTitle: 'Inventory (Tr)',
            reorderDetailTab: 'Reorder Details',
            primaryVendorValue: '0000553053_000001',
        }
    }
    public static Tc_126299: any = {
        'data': {
            maximoTitle: 'Welcome to Maximo',
            username: 'jmnt867',
            password: 'test123',
            StoreroomValue: 'GENOF-INV',
            OrderUnit: 'CYL',
            unitCost: '100',
            itemNumber: '123456',
            ConversionFactor: '1.00',
            company: '0000553053',
            downTerminal: 'DOWN TERMINAL',
            poLinesTab: 'PO Lines',
            newStatus: 'Approved',
            storeRoom: 'GENOF-INV',
            standardCost: '50.00',
            currentBalance: '20.00',
            description: 'Creating item',
            favoriteLinkName: 'Inventory',
            inventoryTitle: 'Inventory (Tr)',
            reorderDetailTab: 'Reorder Details',
            primaryVendorValue: '0000553053_000001',
            selectCompany: '0000055493_000001 W W GRAINGER INC'
        }
    }
    public static Tc_132694: any = {
        'data': {
            maximoTitle: 'Welcome to Maximo',
            username: 'jmnt867',
            password: 'test123',
            StoreroomValue: 'GENOF-INV',
            OrderUnit: 'CYL',
            unitCost: '100',
            itemNumber: '123456',
            ConversionFactor: '1.00',
            company: '0000553053',
            downTerminal: 'DOWN TERMINAL',
            poLinesTab: 'PO Lines',
            newStatus: 'Approved',
            storeRoom: 'GENOF-INV',
            standardCost: '50.00',
            currentBalance: '20.00',
            description: 'Creating item',
            favoriteLinkName: 'Inventory',
            inventoryTitle: 'Inventory (Tr)',
            reorderDetailTab: 'Reorder Details',
            primaryVendorValue: '0000553053_000001',
            selectCompany: '0000055493_000001 W W GRAINGER INC'
        }
    }
    public static Tc_129960: any = {
        'data': {
            maximoTitle: 'Welcome to Maximo',
            username: 'jmnt867',
            password: 'test123',
            m8Parts: 'M8-Parts',
            linkText: 'M8-PARTS'
        }
    }

    public static Tc_141220: any = {
        'data': {
            loginTitle: 'CD-RAP - Logon',
            username: 'jcnt490',
            password: 'jbhunt123',
            submit: 'Submit',
            cdrapHomeTitle: 'CD-RAP - Welcome',
            locationName: 'LOWAR01 | Lowell, AR - JB Hunt Corporate',
            addressFieldName: 'address2',
            addressText: '123 Test',
            zipFieldName: 'postal',
            zipText: '72745',
            locationName1: 'LOUKY10 | Louisville, KY - Global Drive',
            null: '',
        }
    }
    public static Tc_141399: any = {
        'data': {
            loginTitle: 'CD-RAP - Logon',
            username: 'jcnt490',
            password: 'jbhunt123',
            submit: 'Submit',
            cdrapHomeTitle: 'CD-RAP - Welcome',
            locationType: 'Hiring Center',
            hiringType: 'FMS - Chicago',
            locationType2: 'Hotel',
            hotel: 'FMS - Candlewood Suites - Spanaway, WA'
        }
    }

    public static Tc_141386: any = {
        'data': {
            loginTitle: 'CD-RAP - Logon',
            username: 'jcnt490',
            password: 'jbhunt123',
            submit: 'Submit',
            cdrapHomeTitle: 'CD-RAP - Welcome',
            companyAdminLink: 'Company Admin',
            otherEmployers: 'Other Employers',
            companyViewid: 'companyView.id',
            dedicatedTransporttaionSolutionInc: 'DEDICATED TRANSPORTATION SOLUTIONS INC',
            name: 'companyView.name',
            address1: 'companyView.address1',
            city: 'companyView.city',
            state: 'companyView.state',
            zip: 'companyView.zip',
            country: 'companyView.country',
            phone: 'companyView.phone',
            empVerContact: 'companyView.contact1'
        }
    }

    public static Tc_141389: any = {
        'data': {
            loginTitle: 'CD-RAP - Logon',
            username: 'jcnt490',
            password: 'jbhunt123',
            submit: 'Submit',
            cdrapHomeTitle: 'CD-RAP - Welcome',
            minQualificationsoption1: '100433',
            option1value: '99999',
            minQualificationsoption2: '100426',
            minQualificationsoption3: '100434',
            minQualificationsoption4: '100438',
            minQualificationsoption5: '100439',
            minQualificationsoption6: '100424',
            minQualificationsoption7: '100432',
            minQualificationsoption8: '100429',
            minQualificationsoption9: '100437',
            minQualificationsoption10: '100428',
            minQualificationsoption11: '100427',
            option1value1: '1',
            option1value2: '0',
            option1value3: '21',
        }
    }

    public static Tc_141385: any = {
        'data': {
            loginTitle: 'CD-RAP - Logon',
            username: 'jcnt490',
            password: 'jbhunt123',
            submit: 'Submit',
            cdrapHomeTitle: 'CD-RAP - Welcome',
            mediaTypeId: 'mediaTypeId',
            mediaTypeName: 'Acquisition',
            mediaStateId: 'mediaStateId',
            mediaStateName: 'National',
            mediaSourceId: 'mediaSourceId',
            mediaSourceName: 'Other',
        }
    }

    public static Tc_130895: any = {
        'data': {
            maximoTitle: 'Welcome to Maximo',
            username: 'jmnt867',
            password: 'test123',

        }
    }

    public static Tc_153943: any = {
        'data': {
            username: 'jcnt490',
            password: 'jbhunt123',
        }
    }

    public static Tc_155289: any = {
        'data': {
            username: 'jcnt490',
            password: 'jbhunt123',
            searchValue: 'leec7',
            alphaCode: 'LEEC7',
            searchTypeOption: 'EMPLID',
            searchValue1: '337280',
            searchTypeOption1: 'USER_ID',
            searchValue2: 'jisqdg3',
            userId: 'JISQDG3'

        }
    }

    public static Tc_135026: any = {
        'data': {
            username: 'jcnt490',
            password: 'jb0847',
            textToTextArea: 'HP50485',
            textToNotes: 'Test123',
            contentFrameName: 'contentFrame',
            summaryFrameName: 'summaryFrame',
            searchFrameName: 'searchFrame',
            footerFrameName: 'footerFrame',
            disputeReasonDropdownOption: 'PREADJUSTMENT',
            navFrameName: 'navFrame'




        }
    }

    public static Tc_126389: any = {

        'data': {
            finalMileFleetStatusPageTitle: "Final Mile Fleet Status",
            finalMileBirminghamOption: "Final Mile Birmingham,  AL",
            optionName: "Truck",
            checkCallDetailsPageTitle: "Check Call Details"

        }

    }

    public static Tc_126391: any = {

        'data': {
            finalMileFleetStatusPageTitle: "Final Mile Fleet Status",
            finalMileBirminghamOption: "Final Mile Birmingham,  AL",
            optionName: "OBC Errors",
            checkCallDetailsPageTitle: "Check Call Details"

        }

    }

    public static Tc_157971: any = {
        'data': {
            loginTitle: 'CD-RAP - Logon',
            username: 'jcnt494',
            password: 'jb0851',
            submit: 'Submit',
            cdrapHomeTitle: 'CD-RAP - Welcome'
        }
    }

    public static Tc_141398: any = {
        'data': {
            recruiting: 'Recruiting',
            positionlocationstate: 'position.location.state',
            arkansas: 'ARKANSAS',
            search: 'Search',
            cdrap: 'CD-RAP',
            exportToExcel: 'Export To Excel',
            expectedErrorMessage: 'Could not build Excel workbook'
        }
    }

    public static Tc_145578: any = {
        'data': {
            locationAvailability: 'Location Availability',
            availability: 'Availability',
            search: 'Search',
            closeDate: 'Close Date(s) for Scheduling',
            openDate: 'Open Date(s) for Scheduling',
            reset: 'Reset',
            locationStarts: 'Location Starts',
            locationNameDropDown: 'selectedLocationId',
            fmsChicago: 'FMS - Chicago',
            orientationStarts: 'adminView.startTime',
            orientationStartsTime: '06:30 AM',
            addStart: 'Add Start',
            removeStart: 'Remove Start',
            updateSpecialStart: 'Add or Update Special Start to Selected Location(s)',
            holidaySpecialStarts: 'Holiday Special Starts',
            selectedAvailableLocations: 'selectedAvailableLocations',
            atlanta: 'A-Atlanta',
            insertArrow: '▶',
            mmNameAttribute: 'specialStart.effectiveDate_mm',
            mm: '01',
            ddNameAttribute: 'specialStart.effectiveDate_dd',
            dd: '01',
            yyyyNameAttribute: 'specialStart.effectiveDate_yyyy',
            yyyy: '2222',
            capacityNameAttribute: 'specialStart.capacity',
            capacity: '1',
            durationNameAttribute: 'specialStart.durationInDays',
            duration: '1'
        }
    }
    public static Tc_141397: any = {
        'data': {
            travel: 'Travel',
            inbound: 'Inbound',
            bus: 'Bus',
            newInboundTravel: 'New Inbound Travel',
            requestNewTravel: 'Request New Travel',
            newOutboundTravel: 'New Outbound Travel',
            search: 'Search',
            to: 'To',
            toMM: '01',
            toDD: '30',
            toYYYY: '2018',
            from: 'From',
            fromMM: '01',
            fromDD: '01',
            fromYYYY: '2018',
            ssn: 'SSN',
            updateTravel: 'Update Travel',
            name: 'Name',
            callBackConfirmation: 'Call Back Confirmation',
            reset: 'Reset',
            plane: 'Plane',
            nextToMM: '02',
            nextToDD: '01',
            nextToYYYY: '2018',
            nextFromMM: '02',
            nextFromDD: '28',
            nextFromYYYY: '2018',
            outbound: 'Outbound',
            outboundtoMM: '12',
            outboundtoDD: '01',
            outboundtoYYYY: '2017',
            outboundfromMM: '12',
            outboundfromDD: '28',
            outboundfromYYYY: '2017',
            cancel: 'Cancel',

        }
    }

    public static Tc_138401: any = {
        'data': {
            searchText: 'Search',
            errorMSG: 'Person Not Found'
        }
    }

    public static Tc_138404: any = {
        'data': {
            stateDropDownOptionValue: 'AR',
            classDropDownOptionValue: '100110',
            numberText: '123456789',
            eipirationMonth: '01',
            eipirationDay: '01',
            eipirationYear: '9999',
            save: 'Save',
            actionCommentsText: 'abc123',
            submitAndContinue: 'Submit & Continue'
        }
    }

    public static Tc_141391: any = {
        'data': {
            companyAdminLink: 'Company Admin',
            companyAdminTitle: 'CD-RAP',
            otherValuesCategoryDropDownValue: '175',
            otherValuesCategoryQuestionTypeDropDownValue: '132',
            otherValuesValueHighDropDownValue: '100620',
            high: 'High',
            highPriority: 'High Priority',
            incentive: 'Incentive',
            lowPriority: 'Low Priority',
            low: 'Low',
            mediumPriority: 'Medium Priority',
            medium: 'Medium',
            startup: 'Startup',
            otherValuesValueIncentiveDropDownValue: '480',
            otherValuesValueLowDropDownValue: '100622',
            otherValuesValueMediumDropDownValue: '100621',
            otherValuesValueStartupDropDownValue: '479',
            otherValuesValueControlDropDownValue: '100283',
            otherValuesValueCriminalDropDownValue: '100238',
            otherValuesValueEmploymentHistoryDropDownValue: '100236',
            otherValuesValueEmploymentHistoryInvestigationDropDownValue: '100280',
            otherValuesValueIcQuestionsDropDownValue: '100281',
            otherValuesValueInvestigationDropDownValue: '100284',
            otherValuesValueMVRDropDownValue: '100237',
            otherValuesValueScreeningDropDownValue: '100282',
            flowControlQuestion: 'Flow control question',
            control: 'Control',
            criminal: 'Criminal',
            unknown: 'Unknown',
            employmentHistory: 'Employment History',
            employmentHistoryInvestigati: 'Employment History Investigati',
            icQuestions: 'IC Questions',
            investigationQuestion: 'Investigation question',
            investigation: 'Investigation',
            mvr: 'MVR',
            screening: 'Screening',
            applicationScreeningQuestion: 'Application screening question'
        }
    }

    public static Tc_138402: any = {
        'data': {
            careerPlacementSpecialistOptionValue: '5598',
            firstName: 'Dan',
            middleName: 'Allan',
            lastName: 'Whit',
            dobMonth: '01',
            dobDay: '01',
            dobYear: '1987',
            typeDropDownOptionValue: '98',
            stateDropDownOptionValue: '194',
            sourceDropDownOptionValue: '1973',
            otherOrExplainText: 'abc123',
            streetAddress: '615 JB Hunt Corporate ',
            fromMonth: '01',
            fromDay: '01',
            fromYear: '2000',
            permanentStateDropDownOptionValue: '161',
            permanentCityDropDownOptionValue: '851',
            permanentZipCode: '72712',
            candidateTypeDropDownOptionValue: '100107',
            driverInterestsDropDownOptionValue: '234051',
            search: 'Search',
            firstNameDan: 'dan',
            one: '1',
            zero: '0',
            actionDropDownOptionValue: '100885',
            actionCommentsText: 'Test 123',
            reasonDropDownOptionValue: '232360',
            submit: 'Submit',
            selectedReferralEmployeeMessage: 'Selected Referral cannot be an Office Employee',
            incompleteMessage: 'Still Application Page 1 is incomplete',
            homePhoneNumber: '4568971239',
            noActionOptionValue: '0'
        }
    }

    public static Tc_138403: any = {
        'data': {
            employementHistory: 'Employment History',
            fromMonth: '01',
            fromDay: '01',
            fromYear: '2000',
            one: '1',
            zero: '0',
            companyNameDropDownOptionValue: '2672',
            reasonForLeavingDropDownOptionValue: '234046',
            rehireStatusDropDownOptionValue: '232117',
            positionDropDownOptionValue: '100166',
            typeOfVerificationDropDownOptionValue: '232327',
            equipmentVehicleDropDownOptionValue: '104207',
            equipmentTrailerDropDownOptionValue: '104101',
            equipmentSeatDropDownOptionValue: '100120',
            submit: 'Submit',
            acceptNoOrderButton: 'Accept - No Order',
            fcraEmploymentHistory: 'FCRA Employment History',
            skillCategoryDropDownOptionValue: '234060',
            skillDropDownOptionValue: '234061',
            yearsNumber: '3',
            submitAndContinue: 'Submit & Continue'
        }
    }

    public static Tc_139490: any = {
        'data': {
            loginTitle: 'CD-RAP - Logon',
            username: 'jcnt494',
            password: 'jb0851',
            submit: 'Submit',
            cdrapHomeTitle: 'CD-RAP - Welcome',
            investigationsLink: 'Investigations',
            oneDayRehiresLink: 'One Day Rehires',
            investigationSummaryScreenTitle: 'Investigation Search',
            labelUnscheduled: 'Unscheduled',
            unscheduledRadioButtonValue: 'unscheduled',
            labelBoth: 'Both',
            bothRadioButtonValue: 'show_all',
            labelRoadTest: 'Road Test',
            roadTestRadioButtonValue: 'rt',
            labelShow: 'Show',
            showRadioButtonValue: 'show',
            comma: ","
        }
    }

    public static Tc_139847: any = {
        'data': {
            commissionLinkText: 'Commission',
            commissionTitle: 'CDP Commission Search',
            approved: 'APPROVED',
            denied: 'DENIED',
            excluded: 'EXCLUDED',
        }
    }

    public static Tc_139854: any = {
        'data': {
            schedulingWorkQuesueLink: 'Scheduling Work Queue',
            confirmValue: 'Confirm',
            textToVerify: 'Call Back Confirmation',
            vReleaseRequiredValue: 'V-Release Required',
            requiringContractValue: 'Requiring Contact',
            noShowValue: 'No Show',

        }
    }

    public static Tc_141373: any = {
        'data': {
            commpanyAdminLink: 'Company Admin',
            appQuestionsLinkText: 'App Questions',
            controlText: 'Control',
            criminalText: 'Criminal',
            employmentHistoryText: 'Employment History',
            employmentHistoryInvestText: 'Employment History Investigati',
            icQuestionsText: 'IC Questions',
            investigationsText: 'Investigation',
            mvrTest: 'MVR',
            screeningText: 'Screening',
            control_Questions: ['Have you reviewed your rights via email or web address at http://www.jbhunt.com/files/driverjobs/stateinstructions.pdf?', 'Would you like time to review prior to proceeding to the individual assessment?'],
            criminal_Questions: ['Have you ever been convicted for driving under the influence of drugs or alcohol or have a charge pending?', 'Have you ever been convicted for possession, sale or use of a narcotic drug, amphetamine, or derivative thereof or have a charge pending?', 'Have you ever been convicted of a crime or have a current charge pending?', 'Have you ever been convicted of an offense involving the use of drugs or alcohol?', 'Have you tested positive, or refused to test, on any pre-employment drug or alcohol test administered by any company that you applied for, but did not obtain, safety sensitive transportation work covered by DOT agency drug and alcohol testing rules during the past 3 years?'],
            employmentHistory_Questions: ['Have you ever had any driving license, permit, or privilege revoked or suspended?', 'Have you ever tested positive on any drug test, or tested at 0.02 or greater on an alcohol test, or refused to take any drug or alcohol test at any previous employer?'],
            employmentHistoryInvestigation_Questions: ['Has the Driver ever refused a required drug or alcohol test?', 'Has the Driver ever tested positive on a required controlled-substance test?', 'Has the Driver ever tested at or above 0.02 on any required alcohol test?', 'Has the Driver ever violated any other provisions of the DOT drug and alcohol testing regulations?', 'Have you ever received information from any previous employer that this individual violated DOT drug and alcohol regulations?'],
            icQuestion_Questions: ['Is the weight of the truck less than or equal to 20,000 lbs including fuel, driver, and driver\'s personal items?', 'Can your truck pass a DOT inspection?', 'Is the fifth wheel height less than or equal to 47-1/2" from ground to top?', 'Are you the legal owner of the truck?', 'Do you own your truck outright?', 'Is the title in your name?', 'Can you produce the Bill of Sale?', 'Can you produce a current 2290/Heavy Use Tax Permit (paid)?'],
            investigation_Question: ['Have you ever been convicted of a crime or have a current charge pending?'],
            mvr_Questions: [],
            screening_Questions: ['Have you had a driving license, permit, or privilege revoked or suspended in the last 5 years?', 'Have you ever been convicted for driving under the influence of drugs or alcohol or have a charge pending?', 'Have you been convicted of an offense involving the use of drugs or alcohol; or for possession, sale or use of a substance (legal or illegal) or any derivative thereof in the last 7 years or have a charge pending?', 'Have you tested positive, or refused to test, on any pre-employment drug or alcohol test administered by any company that you applied for, but did not obtain, safety sensitive transportation work covered by DOT agency drug and alcohol testing rules during the past 3 years?', 'Have you ever tested positive on any drug test, or tested at 0.02% or greater on an alcohol test, or refused to take any drug or alcohol test at any previous employer in the past 7 years?', 'Have you had any illegal drug use in the past 7 years?', 'Have you had any illegal drug use in the past year? (Note:  Marijuana is still an illegal substance/drug under Federal law.)'],
        }
    }
    public static Tc_139864: any = {
        'data': {
            loginTitle: 'CD-RAP - Logon',
            username: 'jcnt494',
            password: 'jb0851',
            submit: 'Submit',
            cdrapHomeTitle: 'CD-RAP - Welcome'
        }
    }

    public static Tc_139873: any = {
        'data': {
            domainAdmin: "Domain Admin",
            domainViewId: "domainView.id",
            jbhunt: "J. B. Hunt Transport Inc.",
            texasTransportation: "TEXAS TRANSPORTATION"

        }
    }

    public static Tc_126266: any = {
        'data': {
            finalMileFleetStatusPageTitle: "Final Mile Fleet Status",
            finalMileBirminghamOption: "Final Mile Birmingham,  AL",
            stopNumberIndex: '1'

        }

    }

    public static Tc_126390: any = {
        'data': {
            finalMileFleetStatusPageTitle: "Final Mile Fleet Status",
            finalMileBirminghamOption: "Final Mile Birmingham,  AL",
            optionName: "Order",
            eomPageTitle: "Enterprise Order Management"

        }

    }


    public static Tc_126399: any = {
        'data': {
            finalMileFleetStatusPageTitle: "Final Mile Fleet Status",
            finalMileBirminghamOption: "Final Mile Birmingham,  AL",
            finalMileDothanOption: "Final Mile Dothan,  AL",
            finalMileLittleRockOption: "Final Mile Little Rock,  AR"

        }

    }

    public static Tc_126641: any = {
        'data': {
            finalMileFleetStatusPageTitle: 'Final Mile Fleet Status',
            finalMileBirminghamOption: 'Final Mile Birmingham,  AL',
            finalMileDothanOption: 'Final Mile Dothan,  AL',
            finalMileLittleRockOption: 'Final Mile Little Rock,  AR',
            refreshIcon: 'Refresh',
            mapIcon: 'Map',
            detailsText: 'Details'
        }
    }

    public static Tc_156016: any = {
        'data': {
            coaPageTitle: 'COA - Customer Order Administration'
        }
    }

    public static Tc_158258: any = {
        'data': {
            setting: 'Settings',
            showBanner: 'Show Banner',
            hideBanner: 'Hide Banner'
        }
    }

    public static Tc_158259: any = {
        'data': {
            settings: 'Settings',
            increaseFontSize: 'Increase Font Size',
            decreaseFontSize: 'Decrease Font Size'
        }
    }

    public static Tc_158257: any = {
        'data': {
            signOut: 'Sign Out',
            clickHere: 'Click here',
            coaPageTitle: 'COA - Customer Order Administration'
        }
    }

    public static Tc_150998: any = {
        'data': {
            searchByDropDownValue: 'WHDC',
            bolNumber: '272047702',
            requestDetails: 'Request Details',
            viewCallHistory: 'View Call History',
            editRequest: 'Edit Request',
            one: '1',
            preCallPageTitle: 'PreCall - Request Details',
            zero: '0'
        }
    }

    public static Tc_158742: any = {
        'data': {
            userid: 'jcnt494',
            password: 'jb0851',
            shopfloorPageTitle: 'Shopfloor',
            quickLinks: 'Quick',
            navistartEducation: 'Education',
            one: '1',
            navistartEducationPageTitle: 'Navistar Education'
        }
    }

    public static Tc_158713: any = {
        'data': {
            userid: 'jcnt494',
            password: 'jb0851',
            shopfloorPageTitle: 'Shopfloor',
            quickLinks: 'Quick',
            maintenanceSwitchboard: 'Maintenance',
            one: '1',
            maintenanceSwitchboardPageTitle: 'myJBHunt - Community'
        }
    }

    public static Tc_158715: any = {
        'data': {
            userid: 'jcnt494',
            password: 'jb0851',
            shopfloorPageTitle: 'Shopfloor',
            quickLinks: 'Quick',
            documentLibrary: 'Library',
            one: '1',
            documentLibraryPageTitle: 'DocumentLibrary'
        }
    }

    public static Tc_150999: any = {
        'data': {
            administrationTab: 'Administration',
            manageFacilities: 'Manage Facilities',
            manageFacilitiesPageTitle: 'COA - Admin',
            lastPage: 'Last',
            firstPage: 'First',
            zero: '0',
            one: '1',
            sortingColumns: ['Code', 'Type', 'Customer Code', 'Name', 'Region', 'City State Code', 'ZIP Code']
        }
    }

    public static TC_125748: any = {
        'data': {
            appLink: '360 Platform',
            platformPageTitle: 'J.B. Hunt 360',
            pageTitle: 'Supply Chain Management',
            optionName: 'Team Management',
            team: 'TEST ',
            indexOne: '1',
            teamMembername1: 'Jared Shepherd',
            valueToSelect1: 'Jared Shepherd, Information Services Intern',
            indexTwo: '2',
            teamMembername2: 'Andrew Newsom',
            valueToSelect2: 'Andrew Newsom, Sr Carrier Sales Coordinator',
            optionName1: 'Task Management',
            taskCategoryOption: 'Customer Experience',
            typeDropdownValue: 'Billing Party',
            valueInputfield: 'JBHUNT',
            optionToValueInputField: '360Cc Test Co (36LO7), Jbhunt Drive, Lowell, Arkansas, USA, 72745',
            taskCategoryDropdownName: 'Task Category',
            appointementOwnerOption: 'Appointment Owner ',
            value: '360Cc Test Co (36LO7), '

        }
    }

    public static TC_126024: any = {
        'data': {
            appLink: '360 Platform',
            platformPageTitle: 'J.B. Hunt 360',
            pageTitle: 'Supply Chain Management',
            optionName: 'Team Management',
            team: 'TEST ',
            indexOne: '1',
            teamMembername1: 'Jared Shepherd',
            valueToSelect1: 'Jared Shepherd, Information Services Intern',
            indexTwo: '2',
            teamMembername2: 'Andrew Newsom',
            valueToSelect2: 'Andrew Newsom, Sr Carrier Sales Coordinator',
            optionName1: 'Task Category Management',
            availableRolesDropdownOption1: 'Application Support',
            availableRolesDropdownOption2: 'Appointment Owner ',
            availableRolesDropdownOption3: 'Capacity Owner',
            availableResponsibilitesDropdownOption1: 'Application Support Area',
            availableResponsibilitesDropdownOption2: 'Billing Party',
            availableResponsibilitesDropdownOption3: 'Business Unit',
            applicationSupportOption: 'Application Support',
            businessUnitDropdownOption: 'DCS'
        }
    }

    public static TC_126653: any = {

        'data': {
            appLink: '360 Platform',
            platformPageTitle: 'J.B. Hunt 360',
            pageTitle: 'Supply Chain Management',
            optionName: 'Notification Management',
            taskCategoryOption: 'Account',
            notificationSubCategoryOption: 'Commitment',
            notificationCategoryDropdownName: 'Notification Category',
            notificationSubCategoryDropdownName: 'Notification SubCategory',
            notificationTypeDropdownOption: 'Commitment Expiration ',
            daysTillExpirationFieldValue: '1',
            corporateAccountText: 'JBHUNT',
            corporateAccountOption: '360Cc Test Co, 36LO7,',
            contacTtypeDropdownOption: 'Internal',
            contactName: 'Jared Shepherd',
            classAttribute: 'inActive-cls',
            optionName1: 'Team Management',

        }

    }

    public static Tc_94594: any = {
        'data': {
            paceLink: 'PACE',
            saveButton: 'Save',
            orderLookUpLink: 'Order Lookup',
            editTripButton: 'Edit Trip',
            username: 'jcnt491',
            password: 'jb0848',
            accountLabel: 'Account',
            accountValue: 'Cornerstone LDCN - BALMDX',
            true: true,
        }
    }
    public static Tc_94614: any = {
        'data': {
            paceLink: 'PACE',
            saveButton: 'Save',
            orderLookUpLink: 'Order Lookup',
            editTripButton: 'Edit Trip',
            username: 'jcnt491',
            password: 'jb0848',
            accountLabel: 'Account',
            accountValue: 'Whirlpool LDCN - AUSTXX',
            true: true,
            billingPeriodRadioButton: 'BillingPeriod',
            orderStatus: 'EMPTY',
            editTripPageTitle: 'Edit Trip',
            stopDetailsRow: '3',
            stopUpdateTitle: 'Stop Update',
            customerServicesTitle: 'Customer Services',
            editButton: 'Edit',
            customerSpecificServiceDropdownOptionText: 'RETURN - Return',
            customerSpecificServiceDropdownOption: 'RETURN',
            expectionReasonDropDownOptionValue: 'NOUTILS',
            exitButton: 'Exit'


        }
    }


    public static Tc_94738: any = {
        'data': {
            paceLink: 'PACE',
            saveButton: 'Save',
            orderLookUpLink: 'Order Lookup',
            billingPeriodRadioButton: 'BillingPeriod',
            orderStatus: 'EMPTY',
            editTripButton: 'Edit Trip',
            username: 'jcnt491',
            password: 'jb0848',
            accountLabel: 'Account',
            accountValue: 'Whirlpool LDCN - SA TXX',
            exitButton: 'Exit',
            cancelButton: 'Cancel',
            stopDetailsRow: 4,
            customerSpecificServiceDropdownOptionText: 'RETURN - Return',
            customerSpecificServiceDropdownOption: 'RETURN',
            expectionReasonDropDownOptionValue: 'NOUTILS',
            editButton: 'Edit',
            stopUpdateTitle: 'Stop Update',
            customerServicesTitle: 'Customer Services',
            editTripPageTitle: 'Edit Trip',
            columnText: 'Customer\nCode',
            columnText1: 'City/State\nCode',
            columnText2: 'Stop Class'

        }
    }



    public static Tc_127143: any = {
        'data': {
            username: 'jcnt491',
            password: 'jb0848',
            paceLink: 'PACE',
            dropDownOption: 'Account',
            dropDownAccountOption: 'YKK AP America -CHANC',
            backhaulRevenueLookupLink: 'Backhaul Revenue Lookup',
            saveButton: 'Save',
        }
    }

    public static Tc_108519: any = {
        'url1': { url: "http://mileage.jbhunt.com/MileageService/miles/cityStateCode/LANMI/cityStateCode/ALGIL/RAND/19?cache=OFF", response: "257.0" },
        'url2': { url: "http://mileage.jbhunt.com/MileageService/miles/cityStateCode/LANMI/cityStateCode/ALGIL/RAND/18?cache=OFF", response: "254.0" },
        'url3': { url: "http://mileage.jbhunt.com/MileageService/miles/cityStateCode/LANMI/cityStateCode/ALGIL/PCMILER/13?cache=OFF", response: "257.7" },
        'url4': { url: "http://mileage.jbhunt.com/MileageService/miles/cityStateCode/LANMI/cityStateCode/ALGIL/PCMILER/14?cache=OFF", response: "258.3" },
        'url5': { url: "http://mileage.jbhunt.com/MileageService/miles/cityStateCode/LANMI/cityStateCode/ALGIL/PCMILER/15?cache=OFF", response: "258.3" },
    }


    public static TC_128398: any = {
        'data': {
            appLink: '360 Platform',
            platformPageTitle: 'J.B. Hunt 360',
            pageTitle: 'Account',
            accountSearchInputFieldValue: 'DAMAC8',
            contactName: 'Automated Test',
            contactType: 'Power Detention Authorization',
            emailAdressess: 'Kelli.Winn@jbhunt.com',


        }
    }

    public static Tc_133060: any = {
        'data': {
            appLink: '360 Platform',
            platformPageTitle: 'J.B. Hunt 360',
            pageTitle: 'Account',
            accountfield: 'MOCHBA',
            value: 'Morton International',
            contact: 'Power Detention Notification'
        }
    }
    public static Tc_133115: any = {
        'data': {
            appLink: '360 Platform',
            platformPageTitle: 'J.B. Hunt 360',
            pageTitle: 'Account'
        }
    }

    public static Tc_5980: any = {
        'data': {
            billToCode: 'DASPAI',
            searchSkeltonButton: 'eomSearchMain:advNext',
            waitTillProcessingValue: 'Searching Skeletons',
            rateCode: '376',
            projectCode: 'S001',
            scheduledAppointmentBeginTime: '19:00',
            scheduledAppointmentEndTime: '23:00',
            scheduledAppointmentBeginTime99: '11:11',
            scheduledAppointmentEndTime99: '11:12',
            conn_String: {
                domain: 'JBH01',
                user: 'jcnt491',
                password: 'jb0848',
                server: 'RouteGuide_PRD',
                database: 'RouteGuide_PRD',
                port: '1433'
            },
            sql_Query: `select A.OrderNumber
        , A.TenderOfferSequenceNumber
        , B.TenderStatusDescription
        , A.RecordStatus
        , A.ProcessAttemptCount
        , A.TotalTenderAmount
        , D.CarrierCode
        , E.AutoTenderEmailAddress
        , E.TenderCommunicationMethod
        from routeGuide_PRD.rt_gd.RouteGuideTender A
        , RouteGuide_PRD.RT_GD.TenderStatusType B
        , RouteGuide_PRD.RT_GD.RouteGuideLaneCarrierAssociation C
        , RouteGuide_PRD.RT_GD.RouteGuideCarrierAssociation D
        , RouteGuide_PRD.RT_GD.TenderContact E
        where A.OrderNumber = '#loadNumber' 
        and A.TenderStatusCode = B.TenderStatusCode
        and C.RouteGuideLaneCarrierAssociationID = A.RouteGuideLaneCarrierAssociationID
        and C.RouteGuideCarrierAssociationID = D.RouteGuideCarrierAssociationID
        and D.TenderContactID = E.TenderContactID
        and A.RecordStatus = 'A'
        and B.RecordStatus = 'A'
        and C.RecordStatus = 'A'
        and D.RecordStatus = 'A'
        and E.RecordStatus = 'A'`,
            DBName: 'MSSQL',
            loadText: 'LOAD #',
            searchLoadButton: 'eomSearchMain:advOrderSearch',
            searchingLoadText: 'Searching Loads',
            nextStepValue: 'TENDER',
            cancelLoadButton: 'Cancel Load',
            nextStepNewValue: 'N/A',
            carrValue: 'CANCELLED',
            classificationValue: 'EMPTY'
        }
    }

    public static Tc_5972: any = {
        'data': {
            billToCode: 'DASPAI',
            searchSkeltonButton: 'eomSearchMain:advNext',
            waitTillProcessingValue: 'Searching Skeletons',
            rateCode: '376',
            projectCode: 'S001',
            scheduledAppointmentBeginTime: '19:00',
            scheduledAppointmentEndTime: '23:00',
            scheduledAppointmentBeginTime99: '19:00',
            scheduledAppointmentEndTime99: '23:00',
            updatedScheduledAppointmentBeginTime99: '11:12',
            updatedScheduledAppointmentEndTime99: '11:12',
            conn_String: {
                domain: 'JBH01',
                user: 'jcnt491',
                password: 'jb0848',
                server: 'RouteGuide_PRD',
                database: 'RouteGuide_PRD',
                port: '1433'
            },
            sql_Query: `select A.OrderNumber
        , A.TenderOfferSequenceNumber
        , B.TenderStatusDescription
        , A.RecordStatus
        , A.ProcessAttemptCount
        , A.TotalTenderAmount
        , D.CarrierCode
        , E.AutoTenderEmailAddress
        , E.TenderCommunicationMethod
        from routeGuide_PRD.rt_gd.RouteGuideTender A
        , RouteGuide_PRD.RT_GD.TenderStatusType B
        , RouteGuide_PRD.RT_GD.RouteGuideLaneCarrierAssociation C
        , RouteGuide_PRD.RT_GD.RouteGuideCarrierAssociation D
        , RouteGuide_PRD.RT_GD.TenderContact E
        where A.OrderNumber = '#loadNumber' 
        and A.TenderStatusCode = B.TenderStatusCode
        and C.RouteGuideLaneCarrierAssociationID = A.RouteGuideLaneCarrierAssociationID
        and C.RouteGuideCarrierAssociationID = D.RouteGuideCarrierAssociationID
        and D.TenderContactID = E.TenderContactID
        and A.RecordStatus = 'A'
        and B.RecordStatus = 'A'
        and C.RecordStatus = 'A'
        and D.RecordStatus = 'A'
        and E.RecordStatus = 'A'`,
            DBName: 'MSSQL',
            loadText: 'LOAD #',
            searchLoadButton: 'eomSearchMain:advOrderSearch',
            searchingLoadText: 'Searching Loads',
            nextStepValue: 'TENDER',
            availableRates: 'AUTO TENDER PENDING',
            timeToWait: '360000',
            orderIndex: '7',
            classificationValue: 'NOT EMPTY'
        }
    }

    public static Tc_5973: any = {
        'data': {
            billToCode: 'DASPAI',
            searchSkeltonButton: 'eomSearchMain:advNext',
            waitTillProcessingValue: 'Searching Skeletons',
            rateCode: '376',
            projectCode: 'S001',
            scheduledAppointmentBeginTime: '19:00',
            scheduledAppointmentEndTime: '23:00',
            scheduledAppointmentBeginTime99: '11:11',
            scheduledAppointmentEndTime99: '11:12',
            conn_String: {
                domain: 'JBH01',
                user: 'jcnt491',
                password: 'jb0848',
                server: 'RouteGuide_PRD',
                database: 'RouteGuide_PRD',
                port: '1433'
            },
            sql_Query: `select A.OrderNumber
        , A.TenderOfferSequenceNumber
        , B.TenderStatusDescription
        , A.RecordStatus
        , A.ProcessAttemptCount
        , A.TotalTenderAmount
        , D.CarrierCode
        , E.AutoTenderEmailAddress
        , E.TenderCommunicationMethod
        from routeGuide_PRD.rt_gd.RouteGuideTender A
        , RouteGuide_PRD.RT_GD.TenderStatusType B
        , RouteGuide_PRD.RT_GD.RouteGuideLaneCarrierAssociation C
        , RouteGuide_PRD.RT_GD.RouteGuideCarrierAssociation D
        , RouteGuide_PRD.RT_GD.TenderContact E
        where A.OrderNumber = '#loadNumber' 
        and A.TenderStatusCode = B.TenderStatusCode
        and C.RouteGuideLaneCarrierAssociationID = A.RouteGuideLaneCarrierAssociationID
        and C.RouteGuideCarrierAssociationID = D.RouteGuideCarrierAssociationID
        and D.TenderContactID = E.TenderContactID
        and A.RecordStatus = 'A'
        and B.RecordStatus = 'A'
        and C.RecordStatus = 'A'
        and D.RecordStatus = 'A'
        and E.RecordStatus = 'A'`,
            DBName: 'MSSQL',
            loadText: 'LOAD #',
            searchLoadButton: 'eomSearchMain:advOrderSearch',
            searchingLoadText: 'Searching Loads',
            nextStepValue: 'TENDER',
            availableRates: 'AUTO TENDER PENDING',
            timeToWait: '360000',
            orderIndex: '7',
            classificationValue: 'NOT EMPTY'
        }
    }

    public static TC_94950: any = {

        'data ': {
            paceLink: 'PACE',
            username: 'jcnt491',
            password: 'jb0848',
            accountLabel: 'Account',
            accountValue: 'Whirlpool LDCN - AUSTXX',
            saveButton: 'Save',
            orderLookUpLink: 'Order Lookup',
            editTripButton: 'Edit Trip',
        }
    }

    public static TC_94621: any = {
        'data': {
            paceLink: 'PACE',
            saveButton: 'Save',
            orderLookUpLink: 'Order Lookup',
            billingPeriodRadioButton: 'BillingPeriod',
            orderStatus: 'EMPTY',
            editTripButton: 'Edit Trip',
            exitButton: 'Exit',
            cancelButton: 'Cancel',
            stopDetailsRow: 2,
            editButton: 'Edit',
            stopUpdateTitle: 'Stop Update',
            customerServicesTitle: 'Customer Services',
            editTripPageTitle: 'Edit Trip',
            classificationDropDown: 'BLDRDIRECT',
            updateButton: 'Update',
            username: 'jcnt491',
            password: 'jb0848',
            accountValue: 'Whirlpool LDCN - AUSTXX',
            accountLabel: 'Account',
        }
    }

    public static Tc_94696: any = {
        'data': {
            paceLink: 'PACE',
            saveButton: 'Save',
            orderLookUpLink: 'Order Lookup',
            billingPeriodRadioButton: 'BillingPeriod',
            orderStatus: 'EMPTY',
            editTripButton: 'Edit Trip',
            username: 'jcnt492',
            password: 'jb0849',
            accountLabel: 'Account',
            accountValue: 'Whirlpool LDCN - AUSTXX',
            stop1: "1",
            stop2: "2",
            stopLast: "last()"
        }
    }

    public static Tc_77016: any = {
        'data': {
            urls: DataProvider.Common,
            billToCode: 'GEEC',
            searchSkeltonButton: 'eomSearchMain:advNext',
            waitTillProcessingValue: 'Searching Skeletons',
            rateCode: '376',
            scheduledAppointmentBeginTime: '19:00',
            scheduledAppointmentEndTime: '23:00',
            DBName: 'db2',
            projectCodeValue: 'S001',
            conn_String: 'Driver={IBM DB2 ODBC DRIVER - DB2V10};DATABASE=JBHDB2A;UID=jcnt491;PWD=jb0848;HOSTNAME=DB2P1IP;port=5035',
            sql_Query_Update: `UPDATE ALI.TPROJECT
            SET NML_NTF_UID = '#UserID'
            WHERE PRJ_C = '#ProjectCode';`,
            sql_Query_Select: `SELECT PRJ_C, NML_NTF_UID FROM ALI.TPROJECT
            WHERE NML_NTF_UID = '#UserID'`,
            userID: browser.params.user.userName,
            tabName: 'Planning',
            option: 'Order Segment',
            carrierCode: '001F',
            carrierPreplanMessage: 'Carrier  Preplan Successful',
            sucessMesage: 'Preplan Successful',
            type: 'CARRIER',
            firstName: 'Saikiran',
            lastName: 'kadudula',
            phone: '111-111-1111',
            tenderMethod: 'E',
            email: 'test.automation@jbhunt.com',
            approvalValue: 'disabled',
            tenderSucessMsg: 'Tendered',
            errorMSG: 'Please insert a detailed description using a minimum of 10 characters',
            textInTender: 'This is automation testing',
            registryPath: 'C:\\TFS_JBHunt\\lib_operationsexecution_qe_automation\\specs\\carrier360\\RegistryFile\\disableIEWindowsAuthentication.vbs',
            requestChange: 'Changes Requested',
            fm2title: 'JB Hunt Freight Manager System',
            orderSegmentTitle: 'Order Segment',
            textLessThanTen: 'test',
            lessThanTenWarning: 'The minimum length for this field is 10',

        }
    }

    public static Tc_71602: any = {
        'data': {
            urls: DataProvider.Common,
            billToCode: 'GEEC',
            searchSkeltonButton: 'eomSearchMain:advNext',
            waitTillProcessingValue: 'Searching Skeletons',
            rateCode: '376',
            scheduledAppointmentBeginTime: '19:00',
            scheduledAppointmentEndTime: '23:00',
            DBName: 'db2',
            projectCodeValue: 'S001',
            conn_String: 'Driver={IBM DB2 ODBC DRIVER - DB2V10};DATABASE=JBHDB2A;UID=jcnt491;PWD=jb0848;HOSTNAME=DB2P1IP;port=5035',
            sql_Query_Update: `UPDATE ALI.TPROJECT
            SET NML_NTF_UID = '#UserID'
            WHERE PRJ_C = '#ProjectCode';`,
            sql_Query_Select: `SELECT PRJ_C, NML_NTF_UID FROM ALI.TPROJECT
            WHERE NML_NTF_UID = '#UserID'`,
            userID: browser.params.user.userName,
            tabName: 'Planning',
            option: 'Order Segment',
            carrierCode: '001F',
            carrierPreplanMessage: 'Carrier  Preplan Successful',
            sucessMesage: 'Preplan Successful',
            type: 'CARRIER',
            firstName: 'Saikiran',
            lastName: 'kadudula',
            phone: '111-111-1111',
            tenderMethod: 'E',
            email: 'test.automation@jbhunt.com',
            approvalValue: 'disabled',
            tenderSucessMsg: 'Tendered',
            errorMSG: 'Please insert a detailed description using a minimum of 10 characters',
            textInTender: 'This is automation testing',
            registryPath: 'C:\\JBHunt\\lib_operationsexecution_qe_automation\\specs\\carrier360\\RegistryFile\\disableIEWindowsAuthentication.vbs',
            requestChange: 'Changes Requested',
            fm2title: 'JB Hunt Freight Manager System',
            orderSegmentTitle: 'Order Segment',
            mouseHoverCancelButtonColor: 'rgba(92, 172, 211, 1)',
            defaultCancelButtonColor: 'rgba(0, 0, 0, 0)',
            mouseHoverRejectTenderButtonColor: 'rgba(92, 172, 211, 1)',
            defaultRejectTenderButtonColor: 'rgba(0, 125, 186, 1)',
            defaultRejectTenderButtonBorderColor: 'rgb(0, 125, 186)',
            cancelButtonFontColor: 'rgba(0, 125, 186, 1)',
            buttonTextFontColor: 'rgba(255, 255, 255, 1)',
            cancelButtonFontColorHover: 'rgba(255, 255, 255, 1)',
            defaultCancelButtonBorderColor: 'rgb(0, 125, 186)',
            mouseHoverRejectTenderButtonBorderColor: 'rgb(92, 172, 211)',
            mouseHoverCancelButtonBorderColor: 'rgb(92, 172, 211)',
            mouseHoverCancelButtonFontColor: 'rgba(255, 255, 255, 1)',

        }
    }


    public static Tc_71597: any = {
        'data': {
            urls: DataProvider.Common,
            billToCode: 'GEEC',
            searchSkeltonButton: 'eomSearchMain:advNext',
            waitTillProcessingValue: 'Searching Skeletons',
            rateCode: '376',
            scheduledAppointmentBeginTime: '19:00',
            scheduledAppointmentEndTime: '23:00',
            DBName: 'db2',
            projectCodeValue: 'S001',
            conn_String: 'Driver={IBM DB2 ODBC DRIVER - DB2V10};DATABASE=JBHDB2A;UID=jcnt491;PWD=jb0848;HOSTNAME=DB2P1IP;port=5035',
            sql_Query_Update: `UPDATE ALI.TPROJECT
            SET NML_NTF_UID = '#UserID'
            WHERE PRJ_C = '#ProjectCode';`,
            sql_Query_Select: `SELECT PRJ_C, NML_NTF_UID FROM ALI.TPROJECT
            WHERE NML_NTF_UID = '#UserID'`,
            userID: browser.params.user.userName,
            tabName: 'Planning',
            option: 'Order Segment',
            carrierCode: '001F',
            carrierPreplanMessage: 'Carrier  Preplan Successful',
            sucessMesage: 'Preplan Successful',
            type: 'CARRIER',
            firstName: 'Saikiran',
            lastName: 'kadudula',
            phone: '111-111-1111',
            tenderMethod: 'E',
            email: 'test.automation@jbhunt.com',
            approvalValue: 'disabled',
            tenderSucessMsg: 'Tendered',
            errorMSG: 'Please insert a detailed description using a minimum of 10 characters',
            textInTender: 'This is automation testing',
            registryPath: 'C:\\TFS_JBHunt\\lib_operationsexecution_qe_automation\\specs\\carrier360\\RegistryFile\\disableIEWindowsAuthentication.vbs',
            requestChange: 'Changes Requested',
            fm2title: 'JB Hunt Freight Manager System',
            orderSegmentTitle: 'Order Segment',
            defaultCancelButtonBorderColor: 'rgb(0, 125, 186)',
            defaultCancelButtonColor: 'rgba(0, 0, 0, 0)',
            defaultAcceptTenderButtonBorderColor: 'rgb(0, 125, 186)',
            defaultAcceptTenderButtonColor: 'rgba(0, 125, 186, 1)',
            buttonTextFontColor: 'rgba(255, 255, 255, 1)',
            cancelButtonFontColor: 'rgba(0, 125, 186, 1)',
            mouseHoverCancelButtonBorderColor: 'rgb(92, 172, 211)',
            mouseHoverCancelButtonColor: 'rgba(92, 172, 211, 1)',
            mouseHoverAcceptTenderButtonColor: 'rgba(92, 172, 211, 1)',
            mouseHoverAcceptTenderButtonBorderColor: 'rgb(92, 172, 211)',
            mouseHoverCancelButtonFontColor: 'rgba(255, 255, 255, 1)',
        }
    }


    public static Tc_71604: any = {
        'data': {
            urls: DataProvider.Common,
            billToCode: 'GEEC',
            searchSkeltonButton: 'eomSearchMain:advNext',
            waitTillProcessingValue: 'Searching Skeletons',
            rateCode: '376',
            scheduledAppointmentBeginTime: '19:00',
            scheduledAppointmentEndTime: '23:00',
            DBName: 'db2',
            projectCodeValue: 'S001',
            conn_String: 'Driver={IBM DB2 ODBC DRIVER - DB2V10};DATABASE=JBHDB2A;UID=jcnt491;PWD=jb0848;HOSTNAME=DB2P1IP;port=5035',
            sql_Query_Update: `UPDATE ALI.TPROJECT
            SET NML_NTF_UID = '#UserID'
            WHERE PRJ_C = '#ProjectCode';`,
            sql_Query_Select: `SELECT PRJ_C, NML_NTF_UID FROM ALI.TPROJECT
            WHERE NML_NTF_UID = '#UserID'`,
            userID: browser.params.user.userName,
            tabName: 'Planning',
            option: 'Order Segment',
            carrierCode: '001F',
            carrierPreplanMessage: 'Carrier  Preplan Successful',
            sucessMesage: 'Preplan Successful',
            type: 'CARRIER',
            firstName: 'Saikiran',
            lastName: 'kadudula',
            phone: '111-111-1111',
            tenderMethod: 'E',
            email: 'test.automation@jbhunt.com',
            approvalValue: 'disabled',
            tenderSucessMsg: 'Tendered',
            errorMSG: 'Please insert a detailed description using a minimum of 10 characters',
            textInTender: 'This is automation testing',
            registryPath: 'C:\\JBHunt\\lib_operationsexecution_qe_automation\\specs\\carrier360\\RegistryFile\\disableIEWindowsAuthentication.vbs',
            requestChange: 'Changes Requested',
            fm2title: 'JB Hunt Freight Manager System',
            orderSegmentTitle: 'Order Segment',
            mouseHoverAcceptTenderButtonColor: 'rgba(92, 172, 211, 1)',
            defaultAcceptTenderButtonColor: 'rgba(0, 125, 186, 1)',
            mouseHoverRejectTenderButtonColor: 'rgba(153, 58, 41, 1)',
            defaultRejectTenderButtonColor: 'rgba(209, 79, 56, 1)',
            buttonTextFontColor: 'rgb(255, 255, 255)',
            defaultRejectTenderButtonBorderColor: 'rgb(209, 79, 56)',
            defaultAcceptTenderButtonBorderColor: 'rgb(0, 125, 186)',
            mouseHoverRejectTenderButtonBorderColor: 'rgb(153, 58, 41)',
            mouseHoverAcceptTenderButtonBorderColor: 'rgb(92, 172, 211)',
        }
    }

    public static Tc_71607: any = {
        'data': {
            urls: DataProvider.Common,
            billToCode: 'GEEC',
            searchSkeltonButton: 'eomSearchMain:advNext',
            waitTillProcessingValue: 'Searching Skeletons',
            rateCode: '376',
            scheduledAppointmentBeginTime: '19:00',
            scheduledAppointmentEndTime: '23:00',
            DBName: 'db2',
            projectCodeValue: 'S001',
            conn_String: 'Driver={IBM DB2 ODBC DRIVER - DB2V10};DATABASE=JBHDB2A;UID=jcnt491;PWD=jb0848;HOSTNAME=DB2P1IP;port=5035',
            sql_Query_Update: `UPDATE ALI.TPROJECT
            SET NML_NTF_UID = '#UserID'
            WHERE PRJ_C = '#ProjectCode';`,
            sql_Query_Select: `SELECT PRJ_C, NML_NTF_UID FROM ALI.TPROJECT
            WHERE NML_NTF_UID = '#UserID'`,
            userID: browser.params.user.userName,
            tabName: 'Planning',
            option: 'Order Segment',
            carrierCode: '001F',
            carrierPreplanMessage: 'Carrier  Preplan Successful',
            sucessMesage: 'Preplan Successful',
            type: 'CARRIER',
            firstName: 'Saikiran',
            lastName: 'kadudula',
            phone: '111-111-1111',
            tenderMethod: 'E',
            email: 'test.automation@jbhunt.com',
            approvalValue: 'disabled',
            tenderSucessMsg: 'Tendered',
            errorMSG: 'Please insert a detailed description using a minimum of 10 characters',
            textInTender: 'This is automation testing',
            registryPath: 'C:\\TFS_JBHunt\\lib_operationsexecution_qe_automation\\specs\\carrier360\\RegistryFile\\disableIEWindowsAuthentication.vbs',
            requestChange: 'Changes Requested',
            fm2title: 'JB Hunt Freight Manager System',
            orderSegmentTitle: 'Order Segment',
            mouseHoverCancelButtonColor: 'rgba(92, 172, 211, 1)',
            defaultCancelButtonColor: 'rgba(0, 0, 0, 0)',
            mouseHoverRequestChangesButtonColor: 'rgba(92, 172, 211, 1)',
            defaultRequestChangesButtonColor: 'rgba(0, 125, 186, 1)',
            defaultCancelButtonBorderColor: 'rgb(0, 125, 186)',
            defaultRequestChangesButtonBorderColor: 'rgb(0, 125, 186)',
            buttonTextFontColor: 'rgb(255, 255, 255)',
            cancelButtonFontColor: 'rgb(0, 125, 186)',
            mouseHoverCancelButtonBorderColor: 'rgb(92, 172, 211)',
            mouseHoverRequestChangesButtonBorderColor: 'rgb(92, 172, 211)',
            mouseHoverCancelButtonFontColor: 'rgb(255, 255, 255)',
        }
    }



    public static Tc_71596: any = {
        'data': {
            urls: DataProvider.Common,
            billToCode: 'GEEC',
            searchSkeltonButton: 'eomSearchMain:advNext',
            waitTillProcessingValue: 'Searching Skeletons',
            rateCode: '376',
            scheduledAppointmentBeginTime: '19:00',
            scheduledAppointmentEndTime: '23:00',
            DBName: 'db2',
            projectCodeValue: 'S001',
            conn_String: 'Driver={IBM DB2 ODBC DRIVER - DB2V10};DATABASE=JBHDB2A;UID=jcnt491;PWD=jb0848;HOSTNAME=DB2P1IP;port=5035',
            sql_Query_Update: `UPDATE ALI.TPROJECT
            SET NML_NTF_UID = '#UserID'
            WHERE PRJ_C = '#ProjectCode';`,
            sql_Query_Select: `SELECT PRJ_C, NML_NTF_UID FROM ALI.TPROJECT
            WHERE NML_NTF_UID = '#UserID'`,
            userID: browser.params.user.userName,
            tabName: 'Planning',
            option: 'Order Segment',
            carrierCode: '001F',
            carrierPreplanMessage: 'Carrier  Preplan Successful',
            sucessMesage: 'Preplan Successful',
            type: 'CARRIER',
            firstName: 'Saikiran',
            lastName: 'kadudula',
            phone: '111-111-1111',
            tenderMethod: 'E',
            email: 'test.automation@jbhunt.com',
            approvalValue: 'disabled',
            tenderSucessMsg: 'Tendered',
            errorMSG: 'Please insert a detailed description using a minimum of 10 characters',
            textInTender: 'This is automation testing',
            registryPath: 'C:\\TFS_JBHunt\\lib_operationsexecution_qe_automation\\specs\\carrier360\\RegistryFile\\disableIEWindowsAuthentication.vbs',
            requestChange: 'Changes Requested',
            fm2title: 'JB Hunt Freight Manager System',
            orderSegmentTitle: 'Order Segment',
            textLessThanTen: 'test',
            lessThanTenWarning: 'The minimum length for this field is 10',
            mouseHoverNeedHelpButtonColor: 'rgba(201, 201, 201, 1)',
            defaultNeedHelpButtonColor: 'rgba(239, 239, 239, 1)',
            mouseHoverRequestChangeButtonColor: 'rgba(201, 201, 201, 1)',
            defaultRequestChangeButtonColor: 'rgba(239, 239, 239, 1)',
            defaultRequestChangeButtonBorderColor: 'rgb(239, 239, 239)',
            mouseHoverRequestChangeButtonBorderColor: 'rgb(201, 201, 201)',
            mouseHoverNeedHelpButtonBorderColor: 'rgb(201, 201, 201)',
            defaultNeedHelpButtonBorderColor: 'rgb(239, 239, 239)',
        }
    }

    public static Tc_131689: any = {
        'data': {
            url: 'orderSegment',
            urls: DataProvider.Common,
            billToCode: 'GEEC',
            searchSkeltonButton: 'eomSearchMain:advNext',
            waitTillProcessingValue: 'Searching Skeletons',
            rateCode: '376',
            scheduledAppointmentBeginTime: '19:00',
            scheduledAppointmentEndTime: '23:00',
            DBName: 'db2',
            projectCodeValue: 'S001',
            conn_String: 'Driver={IBM DB2 ODBC DRIVER};DATABASE=JBHDB2A;UID=jcnt491;PWD=jb0848;HOSTNAME=DB2P1IP;port=5035',
            sql_Query_Update: `UPDATE ALI.TPROJECT
            SET NML_NTF_UID = '#UserID'
            WHERE PRJ_C = '#ProjectCode';`,
            sql_Query_Select: `SELECT PRJ_C, NML_NTF_UID FROM ALI.TPROJECT
            WHERE NML_NTF_UID = '#UserID'`,
            userID: browser.params.user.userName,
            tabName: 'Planning',
            option: 'Order Segment',
            carrierCode: '001F',
            carrierPreplanMessage: 'Carrier  Preplan Successful',
            sucessMesage: 'Preplan Successful',
            type: 'CARRIER',
            firstName: 'Saikiran',
            lastName: 'kadudula',
            phone: '111-111-1111',
            tenderMethod: 'E',
            email: 'test.automation@jbhunt.com',
            approvalValue: 'disabled',
            tenderSucessMsg: 'Tendered',
            errorMSG: 'Please insert a detailed description using a minimum of 10 characters',
            textInTender: 'THis is automation testing',
            registryPath: 'C:\\JBHunt\\lib_operationsexecution_qe_automation\\specs\\carrier360\\RegistryFile\\disableIEWindowsAuthentication.vbs',
            requestChange: 'Changes Requested',
            fm2title: 'JB Hunt Freight Manager System',
            orderSegmentTitle: 'Order Segment',
            textLessThanTen: 'test',
            lessThanTenWarning: 'The minimum length for this field is 10',

        }
    }

    public static Tc_38930: any = {
        'data': {
            urls: DataProvider.Common,
            billToCode: 'GEEC',
            searchSkeltonButton: 'eomSearchMain:advNext',
            waitTillProcessingValue: 'Searching Skeletons',
            rateCode: '376',
            scheduledAppointmentBeginTime: '19:00',
            scheduledAppointmentEndTime: '23:00',
            DBName: 'db2',
            projectCodeValue: 'S001',
            conn_String: 'Driver={IBM DB2 ODBC DRIVER};DATABASE=JBHDB2A;UID=jcnt491;PWD=jb0848;HOSTNAME=DB2P1IP;port=5035',
            sql_Query_Update: `UPDATE ALI.TPROJECT
            SET NML_NTF_UID = '#UserID'
            WHERE PRJ_C = '#ProjectCode';`,
            sql_Query_Select: `SELECT PRJ_C, NML_NTF_UID FROM ALI.TPROJECT
            WHERE NML_NTF_UID = '#UserID'`,
            userID: browser.params.user.userName,
            tabName: 'Planning',
            option: 'Order Segment',
            carrierCode: '001F',
            carrierPreplanMessage: 'Carrier  Preplan Successful',
            sucessMesage: 'Preplan Successful',
            type: 'CARRIER',
            firstName: 'Saikiran',
            lastName: 'kadudula',
            phone: '111-111-1111',
            tenderMethod: 'E',
            email: 'test.automation@jbhunt.com',
            approvalValue: 'disabled',
            tenderSucessMsg: 'Tendered',
            errorMSG: 'Please insert a detailed description using a minimum of 10 characters',
            textInTender: 'THis is automation testing',
            registryPath: 'C:\\TFS_JBHunt\\lib_operationsexecution_qe_automation\\specs\\carrier360\\RegistryFile\\disableIEWindowsAuthentication.vbs',
            requestChange: 'Changes Requested',
            fm2title: 'JB Hunt Freight Manager System',
            orderSegmentTitle: 'Order Segment',
        }
    }

    public static Tc_130908: any = {
        'data': {
            railManagerLink: 'Rail Manager',
            unitUpdateOption: 'Unit Update',
            ediTab: 'EDI',
            railManagerTitle: 'Rail Manager',
            callTypeId: 'callType',
            resetButton: 'Reset',
            carrierId: 'carrier',
            trainNumberId: 'trainNbr',
            originRampId: 'origRamp',
            destinationRampId: 'destRamp',
            eventLocationid: 'eventLocation',
            eventDateid: 'eventDate',
            eventTimeid: 'eventTime',
            timeZoneid: 'eventTZ',
            empty: ''


        }
    }

    public static Tc_130928: any = {
        'data': {
            railManagerLink: 'Rail Manager',
            wayBillOption: 'Send Waybill',
            ediTab: 'EDI',
            railManagerTitle: 'Rail Manager',
            sendWaybillTitle: 'Send Waybill',

        }
    }

    public static Tc_131134: any = {
        'data': {
            railManagerLink: 'Rail Manager',
            railManagerTitle: 'Rail Manager',
            etaTab: 'ETA',
            notificationHistoryOption: 'Notification History',
            notificationHistoryTitle: 'Notification History',

        }
    }

    public static Tc_131139: any = {
        'data': {
            railManagerLink: 'Rail Manager',
            railManagerTitle: 'Rail Manager',
            etaTab: 'ETA',
            railEtaUpdatesOption: 'Rail ETA Updates',
            etaUpdateTitle: 'ETA Update',

        }
    }

    public static Tc_131160: any = {
        'data': {
            railManagerLink: 'Rail Manager',
            railManagerTitle: 'Rail Manager',
            routesTab: 'Routes',
            scheduleAssignmentOption: 'Schedule Assignment',
            scheduleAssignmentTitle: 'Schedule Assignment',

        }
    }

    public static Tc_131143: any = {
        'data': {
            railManagerLink: 'Rail Manager',
            railManagerTitle: 'Rail Manager',
            etaTab: 'ETA',
            trainViewOption: 'Train View',
            trainViewTitle: 'Train View',
            searchButton: 'Search'

        }
    }

    public static Tc_130872: any = {
        'data': {
            railManagerLink: 'Rail Manager',
            chassisOption: "Chassis/Beam",
            ediTab: "EDI",
            chassisPageTitle: "Container/Chassis Attachment",
            fm2Title: "Freight Manager",
            logName: 'Getting Page Title'

        }
    }
    public static Tc_130890: any = {
        'data': {
            railManagerLink: 'Rail Manager',
            emptyPlanOption: "Empty Plan",
            equipmentTab: "Equipment",
            emptyPlanPageTitle: "MT Plan Application",
            mtPlanTitleText: "Empty Plan Maintenance",
            logName: "Waiting For Element"

        }
    }

    public static Tc_130896: any = {
        'data': {
            railManagerLink: 'Rail Manager',
            trainUpdateOption: "Train Update",
            ediTab: "EDI",
            resetButton: "Reset"
        }
    }

    public static Tc_131183: any = {
        'data': {
            railManagerLink: 'Rail Manager',
            successMessage: "Please enter Search Value."
        }
    }
    public static Tc_131180: any = {
        'data': {
            railManagerLink: 'Rail Manager',
            priorityRulesOption: "Priority Rules",
            setupTab: "Setup",
            pageTitle: "Priority Rules"
        }
    }

    public static Tc_131179: any = {
        'data': {
            railManagerLink: 'Rail Manager',
            interlineJunctionOption: "Interline Junction",
            setupTab: "Setup",
            pageTitle: "Interline Junction"
        }
    }

    public static Tc_131177: any = {
        'data': {
            railManagerLink: 'Rail Manager',
            premiumDefaultsOption: "Premium Defaults",
            routesTab: "Routes",
            resetButton: "Reset"
        }
    }

    public static Tc_131168: any = {
        'data': {
            railManagerLink: 'Rail Manager',
            networkDefaultsOption: "Network Defaults",
            routesTab: "Routes",
            pageTitle: "Network Defaults"
        }
    }

    public static Tc_131165: any = {
        'data': {
            railManagerLink: 'Rail Manager',
            preferencesLookupOption: "Preferences Lookup",
            routesTab: "Routes",
            pageTitle: "Preferences Lookup"
        }
    }

    public static Tc_130923: any = {
        'data': {
            railManagerLink: 'Rail Manager',
            shipmentStatusOption: "Shipment Status",
            ediTab: "EDI",
            resetButton: "Reset"
        }
    }

    public static Tc_130920: any = {
        'data': {
            railManagerLink: 'Rail Manager',
            individualStatusUpdateOption: "Individual Status Update",
            ediTab: "EDI",
            resetButton: "Reset"
        }
    }

    public static Tc_135637: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Trailer',
            optionName: 'Dropped',
            assignedToDropdownValue: 'JOPS512',
            optionToHover: 'View Simon Rules',
            text: 'Simon Rules',

        }
    }

    public static Tc_135640: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Trailer',
            optionName: 'Emptied',
            assignedToDropdownValue: 'JOPS512',
            optionToHover: 'View Reference #',
            text: 'Reference Numbers for',

        }
    }

    public static Tc_142983: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Trailer',
            optionName: 'Emptied',
            assignedToDropdownValue: 'JOPS512',
            optionToHover: 'View Appt Changes',
            text: 'Appointment Changes for',

        }
    }

    public static Tc_158010: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Dwell',
            optionName: 'Exceptions Manager',
            exceptionsManagerScreenTitle: 'JB Hunt Dwell Exceptions Manager',
            one: '1',
            filenetEcm: 'Filenet ECM',
            filenetWorkPlace: 'FileNet Workplace XT - Browse',
            two: '2'
        }
    }

    public static Tc_151316: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Trailer',
            optionName: 'Emptied',
            assignedToDropdownValue: 'JOPS512',
            loadNumberOptions: 7,
            actionOptions: 3

        }
    }

    public static Tc_135642: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Trailer',
            optionName: 'Dropped',
            assignedToDropdownValue: 'JOPS512',
            optionToHover: 'View Appt Changes',
            text: 'Appointment Changes for',

        }
    }

    public static Tc_135643: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Trailer',
            optionName: 'Dropped',
            assignedToDropdownValue: 'JOPS512',
            optionToHover: 'View Order Comments',
            text: 'Order Comments for',

        }
    }

    public static Tc_135631: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
        }
    }

    public static Tc_150383: any = {
        'data': {
            username: 'jcnt490',
            password: 'jbhunt123',
            startDate: '01/01/2018',
            endDate: '02/01/2018',
            transactionTypeDropDownValue: 'Add',
            transactionTypeDropDownValue1: 'Remove',
            transactionTypeDropDownValue2: 'Cancel',
            transactionTypeDropDownValue3: 'ALL',
            transactionSttausDropDownValue: 'PENDING',
            transactionSttausDropDownValue1: 'ERROR',
            transactionSttausDropDownValue2: 'ALL'
        }
    }

    public static Tc_150384: any = {
        'data': {
            username: 'jcnt490',
            password: 'jbhunt123',
            hideBanner: 'Hide Banner',
            showBanner: 'Show Banner',
            increaseFontSize: 'Increase Font Size',
            decreaseFontSize: 'Decrease Font Size'

        }
    }

    public static Tc_150385: any = {
        'data': {
            username: 'jcnt490',
            password: 'jbhunt123',
            signOut: 'Sign Out',
            signIn: 'Sign In'

        }
    }

    public static Tc_135619: any = {
        'data': {
            username: 'jcnt490',
            password: 'jbhunt123',
            searchValue: 'abc',
            vendorRecipentTitle: 'Vendor Recipient',
            expressCode: 'Express Code'

        }
    }

    public static TC_86417: any = {
        'data': {
            precallPageTitle: 'Home',
            templateManagementTab: 'Template Management'

        }
    }

    public static TC_86418: any = {
        'data': {
            precallPageTitle: 'Home',
            templateManagementTab: 'Template Management',
            ldcDropdownOption: 'L833'

        }
    }

    public static TC_158723: any = {
        'data': {
            userid: 'jcnt490',
            password: 'jbhunt123',
            shopfloorPageTitle: 'Shopfloor',
            quickLinks: 'Quick',
            mobileMenuOption: 'Mobile',
            mobileMenuTitle: 'Mobile Menu',

        }
    }

    public static TC_158725: any = {
        'data': {
            userid: 'jcnt490',
            password: 'jbhunt123',
            shopfloorPageTitle: 'Shopfloor',
            quickLinks: 'Quick',
            arcTrainingOption: 'ARC',
            arcTrainingTitle: 'Aftermarket Resource Center',

        }
    }

    public static Tc_162013: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Dwell',
            optionName: 'Outgated',
            outGatedSummaryScreenTitle: 'Trailer Dwell',
            search: 'Search',
            one: '1'
        }
    }

    public static Tc_162019: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Dwell',
            optionName: 'Outgated',
            outGatedSummaryScreenTitle: 'Trailer Dwell',
            search: 'Search',
            one: '1'
        }
    }

    public static Tc_161958: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Dwell',
            optionName: 'Outgated',
            outGatedSummaryScreenTitle: 'Trailer Dwell',
            search: 'Search',
            one: '1',
            receiverName: 'BURLINGTON',
            empty: ''
        }
    }

    public static Tc_161966: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Dwell',
            optionName: 'Outgated',
            outGatedSummaryScreenTitle: 'Trailer Dwell',
            search: 'Search',
            one: '1',
            receiverCityState: 'ADDISON, IL',
            empty: ''
        }
    }

    public static Tc_157903: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'External Links',
            optionName: 'Account & Location',
            accountTitle: 'Account',
            one: '1'
        }
    }

    public static Tc_161680: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Dwell',
            optionName: 'Outgated',
            outGatedSummaryScreenTitle: 'Trailer Dwell',
            one: '1'
        }
    }

    public static Tc_157919: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'External Links',
            optionName: 'Help and Support',
            helpAndSupportTitle: 'myJBHunt - Community',
            one: '1'
        }
    }

    public static Tc_157932: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Dwell',
            optionName: 'Exceptions Manager',
            exceptionsManagerScreenTitle: 'JB Hunt Dwell Exceptions Manager',
            one: '1',
            centralCustomerInformation: 'Central Customer Information - Pending Site Listing',
            two: '2'
        }
    }

    public static TC_158726: any = {
        'data': {
            userid: 'jcnt490',
            password: 'jbhunt123',
            shopfloorPageTitle: 'Shopfloor',
            quickLinks: 'Quick',
            cumminsQuickServeOption: 'Cummins',
            cumminsQuickServeTitle: 'Cummins QuickServe Online',

        }
    }

    public static Tc_142992: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Trailer',
            optionName: 'Emptied',
            assignedToDropdownValue: 'JOPS512',
            optionToHover: 'View Simon Rules',
            text: 'Simon Rules',

        }
    }

    public static Tc_142342: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Trailer',
            optionName: 'Dropped',
            assignedToDropdownValue: 'JOPS512',
            optionToHover: 'View Appt Changes',
            text: 'Appointment Changes for',

        }
    }
    public static Tc_157869: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'External Links',
            optionName: 'Account & Location',
            optionName2: 'Help and Support',
            accountPage: 'Accounts',
            helpSupport: 'Security'
        }
    }

    public static Tc_155200: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            option: 'Customer Code',
            code: 'DSAKE'

        }
    }
    public static Tc_155217: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            option: 'Customer Code',
            code: 'DSAKE'

        }
    }

    public static Tc_143142: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Trailer',
            optionName: 'Emptied',
            assignedToDropdownValue: 'JOPS512',
            optionToHover: 'View Reference #',
            text: 'Reference Numbers for',

        }
    }

    public static Tc_160284: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Dwell',
            optionName: 'Outgated',
            outGatedSummaryScreenTitle: 'Trailer Dwell',
            search: 'Search',
            optionToHover: 'View Simon Rules',
            text: 'Simon Rules'
        }
    }

    public static Tc_158548: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Dwell',
            optionName: 'Deramped',
            outGatedSummaryScreenTitle: 'Trailer Dwell',
            search: 'Search',
            optionToHover: 'View Simon Rules',
            text: 'Simon Rules'
        }
    }

    public static Tc_160340: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Dwell',
            optionName: 'Outgated',
            outGatedSummaryScreenTitle: 'Trailer Dwell',
            search: 'Search',
            text: 'Reference Numbers'

        }
    }


    public static Tc_158575: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Dwell',
            optionName: 'Deramped',
            outGatedSummaryScreenTitle: 'Trailer Dwell',
            search: 'Search',
            text: 'Reference Numbers'

        }
    }
    public static Tc_160392: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Dwell',
            optionName: 'Outgated',
            outGatedSummaryScreenTitle: 'Trailer Dwell',
            search: 'Search',
            text: 'Appointment Changes'

        }
    }

    public static Tc_160835: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Dwell',
            optionName: 'Outgated',
            outGatedSummaryScreenTitle: 'Trailer Dwell',
            search: 'Search',
            text: 'Order Comments'

        }
    }

    public static Tc_158504: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Dwell',
            optionName: 'Deramped',
            outGatedSummaryScreenTitle: 'Trailer Dwell',
            search: 'Search',
            text: 'Add Order Comments',
            viewText:'Order Comments',
            successMessage:'Order comments added successfully.'

        }
    }

    public static Tc_160082: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Dwell',
            optionName: 'Outgated',
            outGatedSummaryScreenTitle: 'Trailer Dwell',
            search: 'Search',
            text: 'Add Order Comments',
            viewText:'Order Comments',
            successMessage:'Order comments added successfully.'

        }
    }


    public static Tc_159554: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Dwell',
            optionName: 'Outgated',
            outGatedSummaryScreenTitle: 'Trailer Dwell',
            search: 'Search',
            text: 'CCI Contacts'

        }
    }

    public static Tc_159213: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Dwell',
            optionName: 'Deramped',
            outGatedSummaryScreenTitle: 'Trailer Dwell',
            search: 'Search',
            text: 'Reference Numbers',
            columnNumber: '2',
            columnNumber1: '4'

        }
    }
    public static Tc_159177: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Dwell',
            optionName: 'Deramped',
            outGatedSummaryScreenTitle: 'Trailer Dwell',
            search: 'Search',
            text: 'Appointment Changes',
            columnName: ['Change Date', 'Change Creator', 'Old Scheduled Date', 'New Scheduled Date', 'Old Rsn', 'New Rsn', 'Stop #', 'State City Code', 'Comments']

        }
    }

    public static Tc_161833: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Dwell',
            optionName: 'Outgated',
            outGatedSummaryScreenTitle: 'Trailer Dwell',
            search: 'Search',
            text: 'CCI Contacts',
            one: 1
        }
    }

    public static Tc_160880: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Dwell',
            optionName: 'Outgated',
            outGatedSummaryScreenTitle: 'Trailer Dwell',
            search: 'Search',
            text: 'CCI Contacts'

        }
    }

    public static Tc_141347: any = {

        'data': {

            loginTitle: 'CD-RAP - Logon',
            username: 'jcnt490',
            password: 'jbhunt123',
            submit: 'Submit',
            cdrapHomeTitle: 'CD-RAP - Welcome',
            fieldName: 'name',
            nameText: 'test123',
            descriptionFieldName: 'description',
            descriptionText: '123test',
            businessunitName: 'test123',
        }

    }


    public static Tc_143259: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Trailer',
            optionName: 'Emptied',
            assignedToDropdownValue: 'JOPS512',
            optionToHover: 'View Appt Changes',
            text: 'Appointment Changes for',

        }
    }

    public static Tc_143260: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Trailer',
            optionName: 'Emptied',
            assignedToDropdownValue: 'JOPS512',
            optionToHover: 'View Order Comments',
            text: 'Order Comments for',

        }
    }


    public static Tc_141407: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Trailer',
            optionName: 'Dropped',
            assignedToDropdownValue: 'JOPS512',
            optionToHover: 'View Appt Changes',
            text: 'Appointment Changes for',
            billToCOde: 'PEIR20',
            receiverCode: 'P1GR5',
            recieverStateCity: 'GRV CY, OH',
            transitMode: 'TRAIN'

        }
    }

    public static Tc_88260: any = {
        'data': {
            originZipCode: '72764',
            originStateCity: 'FAYETTEVILLE, AR ',
            destinationZipCode: '72756',
            destinationStateCity: 'ROGERS, AR ',
            durationDays: '4',
            businessName: 'LG Electronics USA',
            contactPerson: 'Mike',
            emailAddress: 'Mike@Gmail.com',
            updatedMessage: 'updated successfully',
            offer: 'Offer# '
        }
    }
    public static Tc_87213: any = {
        'data': {
            originZipCode: '72764',
            originStateCity: 'SONORA, AR',
            intermediateStop: 'NEW YORK, NY USA',
            destinationZipCode: '72764',
            destinationStateCity: 'DALLAS, TX USA',
            city: 'NEW YORK',
            durationDays: '1',
            businessName: 'LG Electronics USA',
            contactPerson: 'Mike',
            emailAddress: 'Mike@Gmail.com',
            updatedMessage: ' has been updated successfully',
            offer: 'Offer# ',
            billToCode: 'GEEC',
            billToCodeName: ' - LG ELECTRONICS USA GEEC',
        }
    }

    public static Tc_161757: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Dwell',
            optionName: 'Outgated',
            outGatedSummaryScreenTitle: 'Trailer Dwell',
            search: 'Search',
            one: '1',
            billToCode: 'BUED59',
            empty: ''
        }
    }

    public static Tc_146946: any = {
        'data': {
            fialed: 'FAILED              ',
            text: 'Reference Numbers',
            claims: 'CLAIMS              ',
            chargeable: 'CHARGEABLE          ',
            canNotValidate: 'CNTVLDTE            ',
            contract: 'CONTRACT            ',
            equipment: 'EQUIPMENT           ',
            exception: 'EXCEPTION           ',
            freeTime: 'FREETIME            ',
            mexico: 'MEXICO              ',
            notification: 'NOTIF               ',
            operations: 'OPERATIONS          ',
            schedLiveUnld: 'SCHEDLIVEUNLD       ',
            system: 'SYSTEM              ',
            trackingError: 'TRACKINGERROR       ',
            waitingAuth: 'WAITINGAUTH         ',
            weather: 'WEATHER             ',
            Tc_142983: DataProvider.Tc_142983.data

        }
    }

    public static Tc_159635: any = {
        'data': {
            fialed: 'FAILED              ',
            text: 'Reference Numbers',
            appointment: 'APPOINTMNT          ',
            chargeable: 'CHARGEABLE          ',
            contract: 'CONTRACT            ',
            equipment: 'EQUIPMENT           ',
            exception: 'EXCEPTION           ',
            freeTime: 'FREETIME            ',
            jbhuntCapacity: 'JBHUNT CAPACITY     ',
            mexico: 'MEXICO              ',
            notification: 'NOTIF               ',
            operations: 'OPERATIONS          ',
            suggestedAppt: 'SUGGESTEDAPPT       ',
            system: 'SYSTEM              ',
            weather: 'WEATHER             ',
            yardPull: 'YARDPULL            ',
            Tc_161680: DataProvider.Tc_161680.data
        }
    }

    public static Tc_161730: any = {
        'data': {
            boxManagementSystemPageTitle: 'Home',
            tabName: 'Dwell',
            optionName: 'Outgated',
            outGatedSummaryScreenTitle: 'Trailer Dwell',
            search: 'Search',
            one: '1',
            sectionCode: 'A',
            empty: ''
        }
    }

    public static Tc_88686: any = {
        'data': {
            originZipCode: '75962',
            originStateCity: 'NACOGDOCHES, TX ',
            destinationZipCode: '72703',
            destinationStateCity: 'FAYETTEVILLE, AR ',
            durationDays: '5',
            billToCode: 'GEEC',
            billToCodeName: ' - LG ELECTRONICS USA GEEC',
            contactPerson: 'Scott Maddocks',
            emailAddress: '@qa.jbhunt.com',
            phoneNumber: '479-202-3669',
            accessorialsDropDownOption: 'Accessorials',
            accessorialsDropDownOptionValue: 'CONGESTION',
            addAccessorialButton: 'Add Accessorial',
            congestionCharge: '1',
            spotPrice: 'Spotprice# ',
            spotPriceText: 'Spot Price',
            successMessage: ' has been successfully created from the given lane(s).'
        }
    }

    public static Tc_87981: any = {
        'data': {
            originZipCode: '72769',
            originStateCity: 'CINCINNATI, AR ',
            destinationZipCode: '72753',
            destinationStateCity: 'PRAIRIE GROVE, AR ',
            durationDays: '5',
            billToCode: 'GEEC',
            billToCodeName: ' - LG ELECTRONICS USA GEEC',
            contactPerson: 'Mike',
            emailAddress: 'Mike@Gmail.com',
            searchSpotPrice: 'Search Spot Price',
            clearButton: 'clearButton',
            searchPrice: 'searchprice',
            spotPrice: 'Spotprice# ',
            spotPriceText: 'Spot Price',
            successMessage: ' has been successfully created from the given lane(s).'
        }
    }

    public static Tc_87220: any = {
        'data': {
            originZipCode: '75642',
            originStateCity: 'ELYSIAN FIELDS, TX ',
            destinationZipCode: '72753',
            destinationStateCity: 'PRAIRIE GROVE, AR ',
            durationDays: '5',
            billToCode: 'GEEC',
            billToCodeName: ' - LG ELECTRONICS USA GEEC',
            contactPerson: 'Mike',
            emailAddress: '@Gmail.com',
            searchSpotPrice: 'Search Spot Price',
            clearButton: 'clearButton',
            searchPrice: 'searchprice',
            offersPendingApprovalText: 'Offers Pending Approval',
            viewDocTitle: 'Spot Price Viewer',
            updateButton: 'Update',
            expireButton: 'Expire',
            updateMessage: 'Days active successfully updated',
            spotPrice: 'Spotprice# ',
            spotPriceText: 'Spot Price',
            successMessage: ' has been successfully created from the given lane(s).'
        }
    }

    public static Tc_86431: any = {
        'data': {
            originStateCityZipCode: 'SONORA, KY 42776 USA',
            destinationStateCityZipCode: 'NEW YORK',
            spotPriceText: 'Spot Price'
        }
    }

    public static Tc_87222: any = {
        'data': {
            originStateCityZipCode: 'SONORA, AR 72764 USA (SONAR)',
            destinationStateCityZipCode: 'PETTIGREW, AR 72752 USA (PEGAR)',
            businessName: 'LG Electronics USA',
            contactPersonInput: 'submitOffer:contactInputText',
            emailAddressInput: 'submitOffer:contactEmailInput',
            emailAddress: '@jbhunt.com',
            offerGroupId: 'Offer Group Id',
            updatedMessage: ' has been updated successfully',
            offer: 'Offer# ',
            spotPrice: 'Spotprice# ',
            spotPriceText: 'Spot Price',
            successMessage: ' has been successfully created from the given lane(s).'
        }
    }

    public static TC_86888: any = {
        'data': {
            originZipCode: 'SONORA',
            originStateCity: 'SONORA, AR USA',
            destinationZipCode: 'New York',
            destinationStateCity: 'NEW YORK, NY USA',
            durationDays: '4',
            billToCode: 'GEEC',
            contactPerson: 'Mike',
            emailAddress: 'Mike@Gmail.com',
            phoneNumber: '479-212-6954',
            updatedMessage: ' has been updated successfully',
            offer: 'Offer# ',
            originZipCode1: '72764',
            originStateCity1: 'SONORA, AR ',
            destinationZipCode1: 'Fort Smith',
            destinationStateCity1: 'FORT SMITH, AR USA',
            addLanebutton: 'Add Lane',
            phoneNumberExpected: '(479)212-6954',
            contactPersonExpected: 'MIKE',
            searchButtonname: 'searchprice',
            spotPriceText: 'Spot Price',
            successMessage: ' has been successfully created from the given lane(s).',
            spotPrice: 'Spotprice# ',
            offerStatusDropdownOption: 'SPOTPRICE'
        }
    }

    public static Tc_139826: any = {
        'data': {
            loginTitle: 'CD-RAP - Logon',
            username: 'jcnt490',
            password: 'jbhunt123',
            submit: 'Submit',
            cdrapHomeTitle: 'CD-RAP - Welcome',
            executiveLink: 'Executive View',
            executiveViewScreachTitle: 'Executive View Search',
            ssn: '112233445',
            spiderLinkName: 'Spider',
            spiderPageTitle: 'DCV',
            dddLinkName: 'DDD',
            dddPageTitle: 'J.B Hunt Driver Review Application',
            starLinkName: 'Star',
            starPageTitle: 'Enterprise',
            driverSearchLinkName: 'Driver Search',
            driverSearchPageTitle: 'Driver Search',
            driverAppPageTitle: 'Application for Employment - Personal Information',
            schedulingLinkName: 'SCHEDULING',
            schedulingPageTitle: 'Employment - Scheduling',
            callBackLink: 'CALL BACK',
            callBackPageTitle: 'Call Back Confirmation',
            investigationRecordLink: 'INVESTIGATION RECORD',
            investigationPageTitle: 'Investigation Detail -Job History Record',
            orientationSummary: 'ORIENTATION SUMMARY',
            orientationSummaryPageTitle: 'Orientation Summary',
            executiveViewComments: 'Test123'
        }
    }

    public static TC_87595: any = {
        'data': {
            originZipCode: '72758',
            originStateCity: 'ROGERS, AR ',
            destinationZipCode: '72703',
            destinationStateCity: 'FAYETTEVILLE, AR ',
            durationDays: '4',
            billToCode: 'GEEC',
            contactPerson: 'Mike',
            emailAddress: 'Mike@Gmail.com',
            phoneNumber: '479-212-6954',
            updatedMessage: ' has been updated successfully',
            offer: 'Offer# ',
            spotPriceText: 'Spot Price',
            successMessage: ' has been successfully created from the given lane(s).',
            spotPrice: 'Spotprice# ',
            searchButtonname:"searchprice"
        }
    }

    public static Tc_87966: any = {
        'data': {
            originZipCode: '14879',
            originStateCity: 'SONORA, NY 14879 USA',
            destinationZipCode: '72756',
            destinationStateCity: 'ROGERS,AR 72756 USA',
            durationDays: '3',
            randomNameGeneratorLength: '5',
            contactPerson: 'Test',
            emailAddress: 'Test@Gmail.com',
        }
    }

    public static Tc_86432: any = {
        'data': {
            originZipCode: '72568',
            originStateCity: 'PLEASANT PLAINS, AR ',
            destinationZipCode: 'NEW YORK',
            destinationStateCity: 'NEW YORK, NY USA',
            durationDays: '5',
            billToCode: 'GEEC',
            billToCodeName: ' - LG ELECTRONICS USA GEEC',
            contactPerson: 'Mike',
            emailAddress: '@qa.jbhunt.com',
            phoneNumber: '479-212-6954',
            updatedMessage: 'updated successfully',
            offer: 'Offer# '
        }
    }

    public static Tc_87599: any = {
        'data': {
            originId: 'getPriceForm:originInput',
            destinationId: 'getPriceForm:destInput',
            originContainerId: "originContainer",
            destinationContainerId: "destContainer",
            originCityName: 'ROGERS, AR',
            originCityZipCode: '72758',
            destinationCityName: 'FAYETTEVILLE, AR ',
            destinationCityZipCode: "72703",
            businessName: 'LG Electronics USA',
            contactPersonInput: 'submitOffer:contactInputText',
            emailAddressInput: 'submitOffer:contactEmailInput',
            emailAddress: '@jbhunt.com',
            driverLoadFreight: 'DRIVER LOADS FREIGHT',
            usePubRate: "Use Pub Rate",
            getCustomerApproval: "Get Customer Approval",
            bypassCustomerApproval: "Bypass Customer Approval",
            offerGroupId: 'Offer Group Id',
            updatedMessage: ' has been updated successfully',
            offer: 'Offer# ',
            spotPrice: 'Spotprice# ',
            spotPriceText: 'Spot Price',
            successMessage: ' has been successfully created from the given lane(s).',
            addAccessorialSuccessMessage: "PUBLISHED FUEL WILL BE ADDED TO INVOICE"
        }
    }

    public static Tc_80121: any = {
        'data': {
            origin: 'CCBDA',
            checkboxHJBTJBDCS: 'HJBT JBDCS',
            checkboxHJBTBVAN: 'HJBT JBVAN',
            carrierCodedropdownOption: 'CRR_C',
            searchByInputValue: 'AMEW'
        }
    }


    public static Tc_131748: any = {
        'data': {
            tabName: "ORDER #",
            searchValue: "M523077",
            searchLoadsID: "eomSearchMain:advOrderSearch",
            pageLoadText: "Searching Skeletons",
            commentType: "C",
            location: "LOWAR",
            comment1: "Testing Made Easy123",
            comment2: "12346ASDF testing Comments",
            numberOfCopies: "2",
            selectLateReason: "262",
            beginTime: "1900",
            endTime: "2300",
            nextLoadButtonID: "eomOrderDetail:navigateToNextBookMultiple",
            createLoadButtonID: "eomOrderDetail:createOrder",
            overrideButton: "Override",
            continueBookingButton: "Continue Booking",
            shipperDropDown: "SHIPPER",
            shipperCode: "DBHA73",
            shipperBeginTime: "2330",
            shipperEndTime: "2359",
            customerDropDown: "CUSTOMER",
            driverCount: "N",
            saveChangesButton: "Save Changes",
            cancelLoadButton: "Cancel Load",
            lateNotice: '02',
            updateMessage: 'COMMENTS UPDATED SUCCESSFULLY'

        }
    }

    public static Tc_131787: any = {
        'data': {
            origin: 'LGFO18',
            searchSkeltonButton: 'eomSearchMain:advNext',
            numberOfCopies: '2',
            skeltonPickUpDateScreen: 'Select Pickup date',
            dropdownOption: 'EXACT',
            reasonCodeValue: '264',
            commentType: "C",
            location: "LOWAR",
            comment1: "Hello From Other Side",
            commentsText: 'comment',
            fleetdecisionTitle: 'Fleet Decision',
            referenceText: 'Reference Number',
            stopCodeOne: '1',
            shippingID: '193',
            referenceNumber: '123456',
            quantity: '100',
            weight: '1000',
            volume: '1000',
            scheduledAppointmentBeginTime: '19:00',
            scheduledAppointmentEndTime: '23:00',
            loadMessage: 'Load Message',
            beginId: 'Beg',
            beginTime: '19:00',
            endId: 'End',
            endTime: '23:00',
            groupDropDownName: 'GrpResp',
            groupDropDownOptionName: 'OTHER',
            reasonDropDownName: 'RsnCode',
            reasonDropDownOptionName: '80',
            contactText: 'itxtContact',
            contactName: 'EMMA',
            commentText: 'itaCommentText',
            comment: 'J.B.Hunt',
            search_value: '"ORDER #"',
            sucessMessage: 'APPOINTMENT CHANGES HAVE BEEN UPDATED SUCCESSFULLY'
        }
    }

    public static Tc_131777: any = {
        'data': {
            tabName: "ORDER #",
            searchValue: "JF10723",
            searchLoadsID: "eomSearchMain:advOrderSearch",
            pageLoadText: "Searching Skeletons",
            commentType: "C",
            location: "LOWAR",
            comment1: "Testing Made Easy123",
            comment2: "12346ASDF testing Comments",
            numberOfCopies: "2",
            selectLateReason: "262",
            beginTime: "1900",
            endTime: "2300",
            nextLoadButtonID: "eomOrderDetail:navigateToNextBookMultiple",
            createLoadButtonID: "eomOrderDetail:createOrder",
            overrideButton: "Override",
            continueBookingButton: "Continue Booking",
            shipperDropDown: "SHIPPER",
            shipperCode: "DBHA73",
            shipperBeginTime: "2330",
            shipperEndTime: "2359",
            customerDropDown: "CUSTOMER",
            driverCount: "N",
            saveChangesButton: "Save Changes",
            cancelLoadButton: "Cancel Load",
            lateNotice: '02',
            updateMessage: 'COMMENTS UPDATED SUCCESSFULLY'

        }
    }
    public static Tc_131768: any = {
        'data': {
            tabName: "ORDER #",
            searchValue: "JF10723",
            searchLoadsID: "eomSearchMain:advOrderSearch",
            pageLoadText: "Searching Skeletons",
            commentType: "C",
            location: "LOWAR",
            comment1: "Testing Made Easy123",
            comment2: "12346ASDF testing Comments",
            numberOfCopies: "2",
            selectLateReason: "262",
            beginTime: "1900",
            endTime: "2300",
            nextLoadButtonID: "eomOrderDetail:navigateToNextBookMultiple",
            createLoadButtonID: "eomOrderDetail:createOrder",
            overrideButton: "Override",
            continueBookingButton: "Continue Booking",
            shipperDropDown: "SHIPPER",
            shipperCode: "DBHA73",
            shipperBeginTime: "2330",
            shipperEndTime: "2359",
            customerDropDown: "CUSTOMER",
            driverCount: "N",
            saveChangesButton: "Save Changes",
            cancelLoadButton: "Cancel Load",
            lateNotice: '02',
            updateMessage: 'COMMENTS UPDATED SUCCESSFULLY'

        }
    }
    public static Tc_131769: any = {
        'data': {
            tabName: "ORDER #",
            searchValue: "M523077",
            searchLoadsID: "eomSearchMain:advOrderSearch",
            pageLoadText: "Searching Skeletons",
            commentType: "C",
            location: "LOWAR",
            comment1: "Testing Made Easy123",
            comment2: "12346ASDF testing Comments",
            numberOfCopies: "2",
            selectLateReason: "262",
            beginTime: "1900",
            endTime: "2300",
            nextLoadButtonID: "eomOrderDetail:navigateToNextBookMultiple",
            createLoadButtonID: "eomOrderDetail:createOrder",
            overrideButton: "Override",
            continueBookingButton: "Continue Booking",
            shipperDropDown: "SHIPPER",
            shipperCode: "DBHA73",
            shipperBeginTime: "2330",
            shipperEndTime: "2359",
            customerDropDown: "CUSTOMER",
            driverCount: "N",
            saveChangesButton: "Save Changes",
            cancelLoadButton: "Cancel Load",
            lateNotice: '02',
            updateMessage: 'COMMENTS UPDATED SUCCESSFULLY'

        }
    }





    public static Tc_78623: any = {
        'data': {
            billToCode: 'DAMAC8',
            searchSkeltonButton: 'eomSearchMain:advNext',
            scheduledAppointmentBeginTime: '19:00',
            scheduledAppointmentEndTime: '23:00',
            stopCodeOne: '1',
            shippingID: '193',
            referenceNumber: '123456',
            quantity: '100',
            weight: '1000',
            volume: '1000',
            typeFieldOption: 'C',
            locationFieldValue: 'LOWAR',
            commentValue: 'HELLO FROM THE OTHER SIDE',
            chargeCode: 'DETENTION',
            quantityFifty: '50',
            unitRate: '10',
            authFirstName: 'DANIEL',
            authLastName: 'CARVAJAL'
        }
    }

    public static Tc_78614: any = {
        'data': {
            billToCode: 'GEEC',
            searchSkeltonButton: 'eomSearchMain:advNext',
            rateCOde: '262',
            modeType: 'TRUCK',
            scheduledAppointmentBeginTime: '19:00',
            scheduledAppointmentEndTime: '23:00',
            stopCodeOne: '1',
            shippingID: '193',
            referenceNumber: '123456',
            quantity: '100',
            weight: '1000',
            volume: '1000',
            typeFieldOption: 'C',
            locationFieldValue: 'LOWAR',
            commentValue: 'TEST1234',
            chargeCode: 'DETENTION',
            quantityFifty: '50.00',
            unitRate: '10',
            authFirstName: 'DANIEL',
            authLastName: 'CARVAJAL'
        }
    }

    public static Tc_130595: any = {
        'data': {
            billToCode: 'STSE99',
            searchSkeltonButton: 'eomSearchMain:advNext'
        }
    }

    public static Tc_78731: any = {
        'data': {
            billToCode: 'GEEC',
            searchSkeltonButton: 'eomSearchMain:advNext',
            rateCOde: '262',
            scheduledAppointmentBeginTime: '19:00',
            scheduledAppointmentEndTime: '23:00',
            stopCodeOne: '1',
            shippingID: '193',
            referenceNumber: '123456',
            quantity: '100',
            weight: '1000',
            volume: '1000',
            typeFieldOption: 'C',
            locationFieldValue: 'LOWAR',
            commentValue: 'TEST1234',
            chargeCode: 'DETENTION',
            quantityFifty: '50',
            unitRate: '10',
            authFirstName: 'DANIEL',
            authLastName: 'CARVAJAL',
            skeletonPageTitle: "Select Pickup date",
            truck: "TRUCK",
            loadDetailsMessage: "Enterprise Order Management - NEW LOAD",
            blankSpace: "",
            title: "Mrs",
            firstName: "Angela",
            lastName: 'Carvajal',
            title1: "Mr",
            firstName1: "Tom",
            lastName1: "CRUISE",
            verifySkeletonList: 0

        }
    }
    public static Tc_81086: any = {
        'data': {
            billToCode:'FATO89',
            true:true,
            false:false,
            searchOption: 'FLEET CODE',
            searchValue: 'JBHA LTL',
            searchSkeltonButton: 'eomSearchMain:advNext',
            waitTillProcessingValue: 'Searching Skeletons',
            ltlTab: 'eomOrderDetail:ltl',
            productDescription: 'LIGHTS',
            boxesOption: 'BOXES',
            hdlQuantity: '100',
            totalWeight: '1000',
            detailsTab: 'frmLtlInformation:details',
            shipperAppointmentScheduledDetailsField: 'shipper',
            receiverAppointmentScheduledDetailsField: 'receiver',
            createCR: 'eomOrderDetail:createCR',
            waitTillProcessing: 'Saving CR Details',
            crCreatedMessage: 'CR CREATED'
        }
    }

    public static Tc_135573: any = {
        'data': {
            origin: 'LGFO18',
            billToCodeInputField: 'eomSearchMain:billto',
            billToCodeText: 'MOCHBA',
            billToCodeLabel: 'BillTo COde',
            searchSkeltonButton: 'eomSearchMain:advNext',
            searchSkeletonsText: 'Search Skeletons',
            divisionColumn: 'Division',
            shipperColumn: 'Shipper',
            division: 'HJBT JBVAN'
        }
    }

    public static Tc_135602: any = {
        'data': {
            origin: 'LGFO18',
            billToCodeInputField: 'eomSearchMain:billto',
            billToCodeText: 'DAMAC8',
            billToCodeLabel: 'BillTo COde',
            searchSkeltonButton: 'eomSearchMain:advNext',
            searchSkeletonsText: 'Search Skeletons',
            divisionColumn: 'Division',
            shipperColumn: 'Shipper',
            division: 'HJBT JBVAN'
        }
    }

    public static Tc_135645: any = {
        'data': {
            billToCodeInputField: 'eomSearchMain:billto',
            billToCodeText: 'INGRBR',
            billToCodeLabel: 'BillTo COde',
            searchSkeltonButton: 'eomSearchMain:advNext',
            searchSkeletonsText: 'Search Skeletons',
            divisionColumn: 'Division',
            shipperColumn: 'Shipper',
            division: 'HJBT JBVAN',
            shipper: 'LGFO18',
        }
    }

    public static Tc_135587: any = {
        'data': {
            billToCodeInputField: 'eomSearchMain:billto',
            billToCodeText: 'INPR3',
            billToCodeLabel: 'BillTo COde',
            searchSkeltonButton: 'eomSearchMain:advNext',
            searchSkeletonsText: 'Search Skeletons',
            divisionColumn: 'Division',
            modeColumn: 'Mode',
            division: 'HJBT JBVAN',
            mode: 'TRUCK'
        }
    }

    public static Tc_135644: any = {
        'data': {
            billToCodeInputField: 'eomSearchMain:billto',
            billToCodeText: 'MCCHA5',
            billToCodeLabel: 'BillTo COde',
            searchSkeltonButton: 'eomSearchMain:advNext',
            searchSkeletonsText: 'Search Skeletons',
            divisionColumn: 'Division',
            modeColumn: 'Mode',
            division: 'HJBT JBVAN',
            mode: 'TRUCK'
        }
    }

    public static Tc_136072: any = {
        'data': {
            origin: 'LGFO18',
            destination: 'CCBDA',
            true: true,
            false: false,
            searchSkeltonButton: 'eomSearchMain:advNext',
            waitTillProcessingValue: 'Searching Skeletons',
            skeltonHJBTJBDCS: 'HJBT JBDCS',
            commentsTab: 'eomSkeletonDetail:sklcomments',
            eomCommentTitle: 'Load Comments',
            type: 'C',
            location: 'LOWAR',
            comment: 'EAT FRUITS AND VEGGIES',
            saveCommentButton: 'frmOrderCommentsListing:cbtnSave1',
            sucessCommentMesaage: 'Comments updated successfully',
            detailsTab: 'frmOrderCommentsListing:skldetails',
            saveChangesButton: 'eomSkeletonDetail:saveSkeleton',
            waitTillProcessing: 'Saving Skeleton',
            successfullyText: 'successfully',
            newSkeletonDetails: { billTo: 'GEEC', inits: 'EP', division: 'HJBT JBDCS', fleet: 'DCS MIIR44', transitMode: 'TRUCK', rateLevel: 'STANDARD', solicitorCode: 'LGFO18', commodity: 'LIGHTS', loadedUnloadedBy: 'CUSTOMER', loadedOn: 'PALLETS', shipperCode: 'DSAKE', receiverCode: 'CCBDA' }
        }
    }

    public static Tc_135692: any = {
        'data': {
            origin: 'CCBDA',
            destination: 'LGFO18',
            true: true,
            false: false,
            searchSkeltonButton: 'eomSearchMain:advNext',
            waitTillProcessingValue: 'Searching Skeletons',
            skeltonHJBTJBHA: 'HJBT JBHA',
            commentsTab: 'eomSkeletonDetail:sklcomments',
            eomCommentTitle: 'Load Comments',
            type: 'C',
            location: 'LOWAR',
            comment: 'EAT FRUITS AND VEGGIES',
            saveCommentButton: 'frmOrderCommentsListing:cbtnSave1',
            sucessCommentMesaage: 'Comments updated successfully',
            detailsTab: 'frmOrderCommentsListing:skldetails',
            saveChangesButton: 'eomSkeletonDetail:saveSkeleton',
            waitTillProcessing: 'Saving Skeleton',
            successfullyText: 'successfully',
            newSkeletonDetails: { billTo: 'GEEC', inits: 'EP', division: 'HJBT JBHA', fleet: '', transitMode: 'TRUCK', rateLevel: 'STANDARD', solicitorCode: 'CCBDA', commodity: 'LIGHTS', loadedUnloadedBy: 'CUSTOMER', loadedOn: 'PALLETS', shipperCode: 'CCBDA', receiverCode: 'LGFO18' }
        }
    }

    public static Tc_80158: any = {
        'data': {
            origin: 'LGFO18',
            destination: 'CCBDA',
            true: true,
            false: false,
            searchSkeltonButton: 'eomSearchMain:advNext',
            waitTillProcessingValue: 'Searching Skeletons',
            skeltonHJBTJBVAN: 'HJBT JBVAN',
            commentsTab: 'eomSkeletonDetail:sklcomments',
            eomCommentTitle: 'Load Comments',
            type: 'C',
            location: 'LOWAR',
            comment: 'EAT FRUITS AND VEGGIES',
            saveCommentButton: 'frmOrderCommentsListing:cbtnSave1',
            sucessCommentMesaage: 'Comments updated successfully',
            detailsTab: 'frmOrderCommentsListing:skldetails',
            saveChangesButton: 'eomSkeletonDetail:saveSkeleton',
            waitTillProcessing: 'Saving Skeleton',
            successfullyText: 'successfully',
            newSkeletonDetails: { billTo: 'GEEC', inits: 'EP', division: 'HJBT JBVAN', fleet: '', transitMode: 'TRUCK', rateLevel: 'STANDARD', solicitorCode: 'CCBDA', commodity: 'LIGHTS', loadedUnloadedBy: 'CUSTOMER', loadedOn: 'PALLETS', shipperCode: 'CCBDA', receiverCode: 'LGFO18' }
        }
    }

    public static Tc_80330: any = {
        'data': {
            company: 'Company',
            editButton: 'eomSearchMain:ediSearch',
            searchTenders: 'Search Tenders',
            button: 'frmEltListing:gimgELT',
            loads: 'PROCESS LOADS',
            reasonCode: '99',
            stopCode: 'SFSLR',
            accept: 'ACCEPT',
            kraft: 'KRAFT',
            rateCode: '262',
            date: '05/09/2018',
            scheduledAppointmentBeginTime: '19:00',
            scheduledAppointmentEndTime: '23:00',
            shipperAppointmentScheduledDetailsField: 'shipper',
            receiverAppointmentScheduledDetailsField: 'receiver',
            searchTenderButton: "Search Tenders",
            buttonId: "",
            rejectTender: "REJECT",
            processLoadsButtonId: "frmEltListing:gimgELT",
            rejectReasonCode: "EQUIPMENT AVAILABILITY",
            rejectButtonId: "formELTReject:cbtnProcessReject",
            rejectbuttonText: "Reject ELT",
            loadTenderType: "Rejected/Cancelled",
            searchButtonId: "eomSearchMain:ediSearch",
            searchButtonText: "Search Tenders"
        }
    }
    public static Tc_80533: any = {
        'data': {

            origin: 'LGFO18',
            eomButton: 'eomSearchMain:advNext',
            verifySkeletonList: 0,
            division: 'HJBT JBVAN',
            title: 'Select Pickup date',
            loadTitle: 'Enterprise Order Management - NEW LOAD',
            scheduledAppointmentBeginTime: '19:00',
            scheduledAppointmentEndTime: '23:00',
            modeType: 'TRUCK'



        }
    }

    public static Tc_141387: any = {
        'data': {
            loginTitle: 'CD-RAP - Logon',
            username: 'jcnt494',
            password: 'jb0851',
            submit: 'Submit',
            cdrapHomeTitle: 'CD-RAP - Welcome',
            companyAdmin: 'Company Admin',
            skillsAdmin: 'Skills Admin',
            selectedTid: 'selectedTid',
            deliveryTypes: 'Delivery Types',
            editSubtypes: 'Edit Subtypes >',
            topLevelDeliveryType: 'Top level > Special Skill Categories > Delivery Types',
            agriculturalBulkFeedDelivery: 'Agricultural Bulk Feed Delivery',
            topLevelAgriculturalBulkFeedDelivery: 'Top level > Special Skill Categories > Delivery Types > Agricultural Bulk Feed Delivery',
            topLevel: 'Top level',
            accidentTypes: 'Accident Types',
            name: '*Name:',
            description: 'Description:',
            accidentTypeDescription: 'Accident Type Description',
            toplevelAccidentTypes: 'Top level > Accident Types',
            backing: 'Backing',
            accidentTypeBacking: 'Accident Type - Backing',
            toplevelAccidentTypesBacking: 'Top level > Accident Types > Backing'

        }
    }

    public static Tc_80312: any = {
        'data': {
            eomText: 'Enterprise Order Management',
            billToCode: 'DECH50 ',
            rateCode: '262',
            date: '05/09/2018',
            scheduledAppointmentBeginTime: '19:00',
            scheduledAppointmentEndTime: '23:00',
        }
    }

    public static Tc_85215: any = {
        'data': {
            eomTitle: 'Enterprise Order Management Search',
            eomText: 'Enterprise Order Management',
            billToCodeInputField: 'eomSearchMain:billto',
            billToCodeText: 'GEEC',
            billToCodeLabel: 'BillTo COde',
            searchSkeltonButton: 'eomSearchMain:advNext',
            searchSkeletonsText: 'Search Skeletons',
            skeletonListingText: 'Skeleton Listing'
        }
    }

    public static TC_113191: any = {
        'data': {
            userid: 'jcnt882',
            password: 'jb7932',
            shopfloorPageTitle: 'Shopfloor',
            workOrderDropdown: 'WorkOrders',
            fleetAssignmentsOption: 'Fleet Assignments'
        }
    }

    public static TC_158277: any = {
        'data': {
            userid: 'jcnt490',
            password: 'jbhunt123',
            shopfloorPageTitle: 'Shopfloor'
        }
    }

    public static TC_158721: any = {
        'data': {
            quick: 'Quick',
            shop: 'Shop',
            shopTalkPageUrl: 'http://shoptalk.blog.jbhunt.com/'
        }
    }
    public static TC_158722: any = {
        'data': {
            quick: 'Quick',
            workday: 'Workday',
            workDayPageUrl: 'https://wd5.myworkday.com/wday/authgwy/jbhunt/login.htmld?redirect=n'
        }
    }

    public static TC_158283: any = {
        'data': {
            userid: 'jcnt490',
            password: 'jbhunt123',
            shopfloorPageTitle: 'Shopfloor',
            clockInOut: 'Clock In/Out',
            startShift: 'Start Shift',
            endShift: 'End Shift - Lunch',
            endShiftEOD: 'End Shift - EOD',
            shopfloorLoginPageTitle: 'Alternate Login Form-jbh_sso'

        }
    }

    public static TC_158278: any = {
        'data': {
            userid: 'jcnt490',
            password: 'jbhunt123',
            shopfloorPageTitle: 'Shopfloor',
            shopManagementDropdown: 'Shop Management',
            userProfileOption: 'User Profile',
            primaryWorkLocationOption: 'CORPADM',
            myHomePageOption: 'Shop Assignments-All',
            defaultLocationOption: 'LOWAR',
            shopfloorLoginPageTitle: 'Alternate Login Form-jbh_sso'

        }
    }

    public static TC_158700: any = {
        'data': {
            userid: 'jcnt490',
            password: 'jbhunt123',
            shopfloorPageTitle: 'Shopfloor',
            quickLinks: 'Quick',
            meriilLynch: 'Merrill',
            benfitsOnline: 'Benefits OnLine'

        }
    }


    public static TC_158718: any = {
        'data': {
            userid: 'jcnt490',
            password: 'jbhunt123',
            shopfloorPageTitle: 'Shopfloor',
            quickLinks: 'Quick',
            planningCentre: 'Planning',
            shopPlanning: 'Shop Planning'

        }
    }

    public static Tc_158714: any = {
        'data': {
            userid: 'jcnt494',
            password: 'jb0851',
            shopfloorPageTitle: 'Shopfloor',
            quickLinks: 'Quick',
            rsccVendors: 'RSCC',
            one: '1',
            rsccTitle: 'Road Service Incidents'
        }
    }

    public static Tc_158716: any = {
        'data': {
            userid: 'jcnt494',
            password: 'jb0851',
            shopfloorPageTitle: 'Shopfloor',
            quickLinks: 'Quick',
            documentsRead: 'Read',
            one: '1',
            documentsReadPageTitle: 'Documents Read by Technician'
        }
    }

    public static Tc_158717: any = {
        'data': {
            userid: 'jcnt494',
            password: 'jb0851',
            shopfloorPageTitle: 'Shopfloor',
            quickLinks: 'Quick',
            cerifications: 'Certifications',
            one: '1',
            cerificationsPageTitle: 'Technician Certifications'
        }
    }

    public static TC_158719: any = {
        'data': {
            userid: 'jcnt490',
            password: 'jbhunt123',
            shopfloorPageTitle: 'Shopfloor',
            quickLinks: 'Quick',
            maximoOOB: 'Maximo',
            maximoTitle: 'Welcome to Maximo'

        }
    }

    public static TC_158720: any = {
        'data': {
            userid: 'jcnt490',
            password: 'jbhunt123',
            shopfloorPageTitle: 'Shopfloor',
            quickLinks: 'Quick',
            tradeStatusOnline: 'Status',
            tradeStatusOnlineTitle: 'TradeStatus Online'

        }
    }

    public static TC_113222: any = {
        'data': {
            incidentInputValue: '123456',
            noDataToDisplayMessage: 'No data to display',
            afterDateInputValue: '45454',
            assetInputFieldValue: '333',
            badRequestError: 'Bad Request',
            assetInputFieldValue1: 'asdf',
            assetInputFieldValue2: '046543 abc',
            backGroundColor: 'rgba(207, 76, 53, 0.3)',
        }
    }

    public static TC_111120: any = {
        'data': {
            alphaInputFieldValue: 'SHAJ18',
            typeDropdownOption: 'Info (I)',
            radius: '500',
            checkBox: ['AMAZON', 'CUST VENDOR', 'CUSTOMER PAY', 'FORK LIFT', 'PALLET JACK', 'PREF VEND', 'RAILYARD VENDORS', 'TIRE BANK', 'VENDOR PORTAL'],
            workOrderCategoryDropDownName: 'Work Order Category:',
            workOrderCategoryDropDownOptionName: 'UNPLANNED - Unplanned Vendor Work',
            workAccompDropdownName: 'Work Accomp:',
            workAccompDropdownOption: '01 - Replaced',
            itemFailureDropDownName: 'Item Failure',
            itemFailureDropDownOption: '33 - Normal Wear',
            reasonDropDownName: 'Reason:',
            reasonDropDownOption: '410 - Unscheduled',
            jobCodeInputValue: '0330-01',
            conditionInputValue: 'test',
            callBackInputValue: '0524 1259',
            estimatedMiscItemInputValue: '22',
            estimatedIssuedItemInputValue: '192.5',
            estimatedLabourInputValue: '104',
            message: 'Success',
            vendor: 'CR_IA',
            sucessMessage: 'created successfully'
        }
    }


    public static Tc_78584: any = {
        'data': {
            freightManagerTitle: 'JB Hunt Freight Manager System',
            planningTab: 'Planning',
            pickUpOption: 'Pick Up',
            pickUpViewPageTitle: 'Pickup View',
            divisionInput: 'division',
            codeOne: '1',
            typeDropdownOptionValue: 'A',
            divisionText: 'HJBT JBVAN',
            areaTypeInput: 'areaType',
            transMdInput: 'transitMode',
            codeTwo: '2',
            transMdText: 'I',
            areaTypeText: 'MKT',
            areaInput: 'area',
            areaText: 'DA',
            columnPWRDRVR: 'PWR/DRVR\nNOTES',
            columnTCALL: 'TCALL\nLOC',
            loadText: 'ORDER #',
            searchLoadButton: 'eomSearchMain:advOrderSearch',
            searchingSkeletonsText: 'Searching Skeletons',

        }
    }

    public static Tc_85230: any = {
        'data': {
            eomTitle: 'Enterprise Order Management Search',
            eomText: 'Enterprise Order Management',
            searchOptionDropDownId: 'eomSearchMain:baseSearchList',
            searchOptionElement: 'Search Option Drop Down',
            createUserIdOption: 'CREATE USERID',
            searchValueTextBoxId: 'eomSearchMain:baseSearchVal',
            searchValueTextBox: 'JCNT492',
            searchLoadButton: 'eomSearchMain:advOrderSearch',
            searchLoadText: 'Search Load',
            loadListingPageTitle: "Load Listing",
            errorMessageText: 'NO ORDERS FOUND THAT MATCH YOUR SEARCH CRITERIA'
        }
    }

    public static Tc_131857 = {
        'data': {
            originValue: 'LGFO18',
            value: '262',
            fleetValue: 'DCS LDC833',
            startTime: '19:00',
            endTime: '23:00',
            zero: 0,
            LoadSucessMessage: 'LOAD UPDATED SUCCESSFULLY',
            divisionValue: 'HJBT JBHA',
        }

    }

    public static TC_158711: any = {
        'data': {
            userid: 'jcnt490',
            password: 'jbhunt123',
            shopfloorPageTitle: 'Shopfloor',
            freightlinerUrl: 'https://login-dtna.prd.freightliner.com/siteminderagent/forms/FTLloginPWC.fcc?TYPE=100728833&REALMOID=06-99ec0cfc-ba19-111d-9853-85a3a1fe0000&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=-SM-9sc3hn9IZXgY9JZnODIYeOOovPjVDGwXO6WlcE%2f1wkzsyiQK77F7KWekJPvzvPcIFkKi76b4AdGQnOuTb%2bnOliPZOY1446D5&TARGET=-SM-https%3a%2f%2fsecure%2efreightliner%2ecom%2fwps%2fmyportal%2fdtnaconnect%2fDTNAConnectHome%2f'
        }
    }

    public static TC_158712: any = {
        'data': {
            userid: 'jcnt490',
            password: 'jbhunt123',
            shopfloorPageTitle: 'Shopfloor',
            naviStarUrl: 'http://international.leaseinspector.com//'
        }
    }

    public static Tc_131544: any = {
        'data': {
            equipmentTab: "Equipment",
            optionCustomerPool: "Customer Pool",
            customerPoolPageTitle: 'Customer Lookup',
            customerPool_Division: "HJBT JBVAN",
            customerPool_CustCode: "CLUN17",
            customerPool_EquipementCLass: 'DRY VAN',
            customerPool_Column1: "Prefix",
            customerPool_Column1Value: "JBHZ",
            customerPool_Column2: "LT St",
            customerPool_Column2Value: "EMPTY",
            customerPool_RequiredColumn: "Equipment",
            unitTestTitle: 'Unit View'
        }
    }

    public static Tc_131858: any = {
        'data': {
            freightManagerTitle: 'JB Hunt Freight Manager System',
            equipmentTab: "Equipment",
            optionCustomerPool: "Customer Pool",
            customerPoolPageTitle: 'Customer Lookup',
            customerPool_Division: "HJBT JBVAN",
            customerPool_CustCode: "CLUN17",
            customerPool_EquipementCLass: 'DRY VAN',
            customerPool_Column1: "Prefix",
            customerPool_Column1Value: "JBHZ",
            customerPool_Column2: "LT St",
            customerPool_Column2Value: "EMPTY",
            customerPool_RequiredColumn: "Equipment",
            unitTestTitle: 'Unit View',
            carrierCode: 'MGAS',
            planningTab: 'Planning',
            unitViewOption: 'Unit View',
            unitViewPageTitle: "Unit View",
            setParameterRadioAndChechBoxFieldName: "Select Type",
            setParameterRadioAndChechBoxOption: "Board",
            codeName: "Board Codes",
            BoardCode1: "L1R",
            BoardCode2: "L1C",
            BoardCode3: "LR1",
            BoardCode4: "G19",
            searchButton: "Search",
            tableId: "results",
            requiredColumnHeaderLable1: "UNIT",
            requiredColumnHeaderLable2: "NBR",
            filterColumn2HeaderLable2: "STT",
            filterColumn2HeaderLable1: "DSP",
            filterText1: "MTY NO PP",
            filterText2: "A",
            filterColumn3HeaderLable1: "PKUP",
            filterColumn3HeaderLable2: "SITE",
            filterText3a: "DW",
            filterText3b: "TQ",
            tabName: "Planning",
            option: "Unit View",
            pickUpOption: "Pick Up",
            optionOrderSegment: "Order Segment",
            orderSegmentTitle: 'Order Segment',
            message: "Carrier  Preplan Successful", //"Tractor  Preplan Successful",
            verifyMessage: 'Preplan Successful',
            type: 'CARRIER',
            firstName: 'Saikiran',
            lastName: 'kadudula',
            phone: '111-111-1111',
            tenderMethod: 'E',
            type1: 'DRIVER',
            tenderapproveMsg: 'TENDER ACCEPTED',
            carrierCheckCallTitle: 'Carrier Check Call',
            optionCarrier: 'Carrier',
            carrierTabName: 'Carrier Check Call',
            headerOptionStatus: "Status",
            dropDownOptionDispatch: "Dispatch *",
            checkCallHistoryText: "D",
            headerDropDownOptionArrivalLoaded: 'Arrival/Loaded',
            headerDropDownOptionArrivalUnLoaded: 'Arrival/Unloaded',
            UnloadedTab: 'Unloaded',
            typeOfLoad: 'Loaded',
            checkCallHistoryText3: 'E',
            checkCallHistoryText2: 'L',
            sql_Query_Update: `UPDATE ALI.TPROJECT
            SET NML_NTF_UID = '#UserID'
            WHERE PRJ_C = '#ProjectCode';`,
            sql_Query_Select: `SELECT PRJ_C, NML_NTF_UID FROM ALI.TPROJECT
            WHERE NML_NTF_UID = '#UserID'`,
            userID: browser.params.user.userName,
            DBName: 'db2',
            conn_String: 'Driver={IBM DB2 ODBC DRIVER - DB2V10};DATABASE=JBHDB2A;UID=jcnt491;PWD=jb0848;HOSTNAME=DB2P1IP;port=5035',
            tenderSucessMsg: 'Tendered'
        }
    }

    public static Tc_131859: any = {
        'data': {
            username: 'jcnt882',
            password: 'jb7932',
            paceLink: 'PACE',
            accountLabel: 'Account',
            accountValue: 'Whirlpool LDCN - HOUTXX',
            saveButton: 'Save',
            orderLookUpLink: 'Order Lookup',
            jbhOrder: 'JBH Order',
            editTripButton: 'Edit Trip',
            yes: 'Y',
            division: 'Y',
            fleetCode: 'Y'
        }

    }

    public static Tc_131545: any = {
        'data': {
            freightManagerUrl: "http://fm.jbhunt.com/FreightManager2/common/index.iface",
            freightManagerTitle: 'JB Hunt Freight Manager System',
            planningTab: 'Planning',
            unitViewOption: 'Unit View',
            unitViewPageTitle: "Unit View",
            setParameterRadioAndChechBoxFieldName: "Select Type",
            setParameterRadioAndChechBoxOption: "Board",
            codeName: "Board Codes",
            BoardCode1: "L1R",
            BoardCode2: "L1C",
            BoardCode3: "LR1",
            BoardCode4: "G19",
            searchButton: "Search",
            tableId: "results",
            requiredColumnHeaderLable1: "UNIT",
            requiredColumnHeaderLable2: "NBR",
            filterColumn2HeaderLable2: "STT",
            filterColumn2HeaderLable1: "DSP",
            filterText1: "MTY NO PP",
            filterText2: "A",
            filterColumn3HeaderLable1: "PKUP",
            filterColumn3HeaderLable2: "SITE",
            filterText3a: "DW",
            filterText3b: "TQ",
            tabName: "Planning",
            option: "Unit View",
            pickUpOption: "Pick Up",
            optionOrderSegment: "Order Segment",
            orderSegmentTitle: 'Order Segment',
            message: "Tractor  Preplan Successful",
            verifyMessage: 'Preplan Successful',
        }
    }
    public static Tc_131548 = {
        'data': {
            divisionCode: "JBHZ",
            customerNumber: 'LGFO18'
        }
    }
    public static Tc_131546 = {
        'data': {
            freightManagerTitle: 'JB Hunt Freight Manager System',
            headerOptionStatus: "Status",
            dropDownOptionDispatch: "Dispatch *",
            checkCallHistoryText: "D",
            pickUpViewTab: 'Pick Up',
            pickupViewTitle: 'Pickup View',
            strArea: ["DA", "", "", ""],
            eventMessage: "Preferences updated successfully.",
            columnHeader1: "PWR/DRVR\nNOTES",
            columnHeader2: "HZ\nLD",
            strType: "",
            strDivison: "HJBT JBVAN",
            strAreaType: "MKT",
            strTranMd: "I",
        }
    }

    public static Tc_131551: any = {
        'data': {
            freightManagerTitle: 'JB Hunt Freight Manager System',
            headerOptionStatus: "Status",
            dropDownOptionDispatch: "Dispatch *",
            checkCallHistoryText: "D",
            headerDropDownOptionArrivalLoaded: 'Arrival/Loaded',
            headerDropDownOptionArrivalUnLoaded: 'Arrival/Unloaded',
            UnloadedTab: 'Unloaded',
            typeOfLoad: 'Loaded',
            checkCallHistoryText3: 'E',
            checkCallHistoryText2: 'L',
        }
    }

    public static Tc_131747: any = {
        'data': {
            tabName: "ORDER #",
            searchValue: "JF10723",
            searchLoadsID: "eomSearchMain:advOrderSearch",
            pageLoadText: "Searching Skeletons",


        }
    }

    public static Tc_131142: any = {

        'data': {
            destinationInputFieldValue: 'Houston',
            destinationValue: 'Houston, TX 77254',
            numberOfRows: '1'
        }
    }

    public static Tc_129919: any = {

        'data': {

        }
    }

    public static Tc_125278: any = {

        'data': {

        }
    }

    public static Tc_131148: any = {

        'data': {
            destinationInputFieldValue: 'Houston',
            destinationValue: 'Houston, TX 77254',
            numberOfRows: '1',
            originInputFieldValue: 'Dallas',
            originValue: 'Dallas, TX 75240',
        }
    }

    public static Tc_80004: any = {
        'data': {
            freightManagerUrl: "http://fm.jbhunt.com/FreightManager2/common/index.iface",
            freightManagerTitle: 'JB Hunt Freight Manager System',
            planningTab: 'Planning',
            division: 'HJBT JBVAN',
            unitViewOption: 'Unit View',
            unitViewPageTitle: "Unit View",
            setParameterRadioAndChechBoxFieldName: "Select Type",
            setParameterRadioAndChechBoxOption: "Board",
            codeName: "Board Codes",
            BoardCode1: "L1R",
            BoardCode2: "L1C",
            BoardCode3: "LR1",
            BoardCode4: "G19",
            searchButton: "Search",
            tableId: "results",
            requiredColumnHeaderLable1: "UNIT",
            requiredColumnHeaderLable2: "NBR",
            filterColumn2HeaderLable2: "STT",
            filterColumn2HeaderLable1: "DSP",
            filterText1: "MTY NO PP",
            filterText2: "A",
            filterColumn3HeaderLable1: "PKUP",
            filterColumn3HeaderLable2: "SITE",
            filterText3a: "DW",
            filterText3b: "TQ"

        }
    }

    public static Tc_131660: any = {
        'data': {
            billToCode: 'GEEC',
            division: 'HJBT JBHA',
            searchSkeltonButton: 'eomSearchMain:advNext',
            rateCOde: '262',
            modeType: 'ICS',
            scheduledAppointmentBeginTime: '19:00',
            scheduledAppointmentEndTime: '23:00',
            stopCodeOne: '1',
            selectLateReason: "262",

        }
    }
    public static Tc_136460: any = {
        'data': {

        }

    }

    public static TC_110847: any = {
        'data': {
            incidentInputValue: '123456',
            noDataToDisplayMessage: 'No data to display',
            afterDateInputValue: '45454',
            assetInputFieldValue: '333',
            badRequestError: 'Bad Request',
            assetInputFieldValue1: 'asdf',
            assetInputFieldValue2: '046543 abc',
            backGroundColor: 'rgba(207, 76, 53, 0.3)',
            alphaInputFieldValue: 'SHAJ18',
            typeDropdownOption: 'Info (I)',
            radius: '500',
            checkBox: ['AMAZON', 'CUST VENDOR', 'CUSTOMER PAY', 'FORK LIFT', 'PALLET JACK', 'PREF VEND', 'RAILYARD VENDORS', 'TIRE BANK', 'VENDOR PORTAL'],
            workOrderCategoryDropDownName: 'Work Order Category:',
            workOrderCategoryDropDownOptionName: 'UNPLANNED - Unplanned Vendor Work',
            workAccompDropdownName: 'Work Accomp:',
            workAccompDropdownOption: '01 - Replaced',
            itemFailureDropDownName: 'Item Failure',
            itemFailureDropDownOption: '33 - Normal Wear',
            reasonDropDownName: 'Reason:',
            reasonDropDownOption: '410 - Unscheduled',
            jobCodeInputValue: '0330-01',
            conditionInputValue: 'test',
            callBackInputValue: '0524 1259',
            estimatedMiscItemInputValue: '22',
            estimatedIssuedItemInputValue: '192.5',
            estimatedLabourInputValue: '104',
            message: 'Success',
            vendor: 'CR_IA',
            userid: 'jcnt490',
            password: 'jbhunt123',
            shopfloorPageTitle: 'Shopfloor',
            workOrderDropdown: 'WorkOrders',
            fleetAssignmentsOption: 'Fleet Assignments'
        }
    }
    public static TC_135698: any = {

        'data': {
            textBoxIndex: 1,
            vendorCode: "+T"
        }
    }
    public static TC_136046: any = {

        'data': {
            textBoxIndex: 1,
            vendorCode: "+T",
            nameTextBox: "Name:",
            zipCodeTextBox: "Zipcode:"
        }
    }

    public static TC_135695: any = {

        'data': {
            browserTitle: "Vendor Portal",
            popUpTitle: "Select Vendor"
        }
    }

    public static TC_136078: any = {

        'data': {
            vendorCode: "+T",
            nameTextBox: "Name:",
            zipCodeTextBox: "Zipcode:",
            contactUs: "Contact Us",
            noContact: "No contacts were found"
        }
    }

    public static TC_136084: any = {

        'data': {
            vendorCode: "+T",
            nameTextBox: "Name:",
            zipCodeTextBox: "Zipcode:",
            userAdmin: "User Admin",
            userId: 'jcnt492'
        }
    }

    public static Tc_131236: any = {

        'data': {
            numberOfRows: '1'
        }
    }


    public static Tc_130810: any = {

        'data': {
            bookingInfo: 'Booking Info',
        }
    }

    public static TC_135707: any = {

        'data': {
            vendorName: 'Andys Towing Service',
            textBoxIndex: 2,

        }
    }

    public static Tc_80529: any = {
        'data': {
            searchOptionValue: "FLEET CODE",
            searchValue: "JBHA LTL",
            searchSkeleton: 'eomSearchMain:advNext',
            billToCode: 'GEEC',
            waitTillProcessingValue: 'Searching Skeletons',
            rateCode: '376',
            scheduledAppointmentBeginTime: '19:00',
            scheduledAppointmentEndTime: '23:00',
            searchOption: 'FLEET CODE',
            ltlTab: 'eomOrderDetail:ltl',
            productDescription: 'LIGHTS',
            boxesOption: 'BOXES',
            hdlQuantity: '100',
            totalWeight: '1000',
            detailsTab: 'frmLtlInformation:details',
            shipperAppointmentScheduledDetailsField: 'shipper',
            receiverAppointmentScheduledDetailsField: 'receiver',
            skeletonList: 0,
            loadDetailsVerification: 'NEW LOAD',
            verifyPickScreenTitle: 'Select Pickup date',
            beginingTime: '19:00',
            endTime: '23:00',
            loadText: 'ORDER #',
            searchLoadButton: 'eomSearchMain:advOrderSearch',
            searchingLoadText: 'Searching Loads',
            orderIndex: '7',
            saveButton: 'frmLtlInformation:cbtnSave1',
            successMessage: 'LTL Line Items Created / Updated Successfully',
            ltlTitle: 'LTL Information',
            projectCode: 'LTL7'
        }
    }

    public static TC_136063: any = {

        'data': {
            vendorCode: "+T",
            nameTextBox: "Name:",
            zipCodeTextBox: "Zipcode:",
            switchCurrentVendor: 'Switch Current Vendor',
            vendorCode2: "+L",

        }
    }

    public static TC_136335: any = {

        'data': {
            vendorCode: "+T",
            nameTextBox: "Name:",
            zipCodeTextBox: "Zipcode:",
            logOut: 'Log Out',
            title:'Login - CAS – Central Authentication Service'
        }
    }

    //fm2


    public static Tc_79815: any = {

        'data': {
            tabName: "Driver",
            option: "Driver View",
            verifyText: "Driver View",
            fieldName: "Board/Group",
            driverViewTableId: "driverViewTable",
            columnName: "N\nR",
            verifyDriverView: "Driver View",
            boardGroupCode1: "L1R",
            boardGroupCode2: "L1C",
            boardGroupCode3: "L1B",
            app: "Freight Manager",
            emptyBoardCode: ""
        }

    }
    public static Tc_80871: any = {

        'data': {
            app: "Freight Manager",
            verifyFreightManagerTitle: "Freight Manager",
            tabName: "Planning",
            option: "Unit View",
            spanText: "Successfully added to tractor multiple preplan list",
            findTractorTable: "results",
            findTractorColumn1: "OBC",
            findTractorColumn2: "UNIT",
            successMessage: "Successfully added to tractor multiple preplan list"
        }

    }

    public static Tc_79821: any = {

        'data': {
            tabName: "Planning",
            option: "Pick Up",
            divisionId: "division",
            areaText: "areaType",
            areaId: "area",
            transitModeId: "transitMode",
            errorMessage: "Notes cannot be numeric.",
            tableId: "r",
            freightManager: "Freight Manager",
            divisionInput: "HJBT JBVAN",
            areaType: "MKT",
            area: "DA",
            tranMdText: "I",
            empty: "",
            invalidText: "111111",
            verifyNote: "Notes cannot be numeric.",
            emptyNoteBox: "SSS18",
            successMessage: "Update note(s) successfully."

        }

    }


    public static Tc_85413: any = {

        'data': {
            tabName: "Planning",
            option: "Delivery",
            strType: "A",
            strDivison: "HJBT JBVAN",
            strAreaType: "MKT",
            strArea: "CH",
            strFleetType: "",
            driverNotes: "ABC123",
            successMessage: "Update note(s) successfully.",



        }

    }
    public static Tc_80862: any = {

        'data': {
            tabName: "Planning",
            unitViewOption: "Unit View",
            pickUpOption: "Pick Up",
            availableTractocolumnText1MTYPp: "MTY PP",
            availableTractocolumnText1MTYNoPp: "MTY NO PP",
            availableTractocolumnName1: "OBC",
            availableTractocolumnText2: "A",
            availableTractocolumnName2: "DSP",
            availableTractoRequiredText: "UNIT",
            strArea: ["DA", "", "", ""],
            columnHeader1: "PWR/DRVR\nNOTES",
            columnHeader2: "HZ\nLD",
            multiPrePlanOption: "Multiple Preplan",
            tractorLogName: "Tractor Number",
            OrderNoLogName: "Order Number",
            successMessage: "Successfully updated.",
            deleteMessage: "Successfully deleted.",
            strType: "A",
            strDivison: "HJBT JBVAN",
            strAreaType: "MKT",
            tranMdText: "I",
            BoardCode1: "L1R",
            BoardCode2: "LR1",
            BoardCode3: "G19",
            BoardCode4: "G23",

        }

    }
    public static Tc_80869: any = {

        'data': {
            tabName: "Driver",
            optionFleetManager: "Fleet Manager View",

            BoardCode1: "L1C",
            BoardCode2: "L1B",
            BoardCode3: "LR1",
            BoardCode4: "G19",
        }

    }
    public static Tc_80026: any = {

        'data': {
            tabName: "Planning",
            unitViewOption: "Unit View",
            unitViewPageTitle: "Unit View",
            unitViewParameterPageTitle: "Unit View Parameter",
            tabDriver: "Driver",
            optionDriverView: "Driver View",
            fieldName: "Board/Group",
            recordsCount: "1",
            trailNumber: "Trailer\nNbr",
            tractorNumber: "Tractor\nNbr",
            orderNumber: "Order\nNbr",
            optionAssignDriver: "Assign Driver",
            driverTextBoxIdTractor: "form:tractorNbr",
            driverTextBoxIdDriver: "form:driver1",
            buttonText: "Update",
            board: "BOARD",
            codeName: "Board Codes",
            BoardCode1: "L1R",
            BoardCode2: "L1C",
            BoardCode3: "LR1",
            BoardCode4: "G19",
            BoardCode5: "L1E",
            BoardCode6: "L1F",
            BoardCode7: "L1D",
            eventMessage: "Preference Updated",
            message: "No drivers assigned to this tractor yet. Please enter driver information"
        }

    }
    public static Tc_80853: any = {

        'data': {
            buttonTextValueSearch: "Search",
            columnHeader1: "Empty Pool: Total 219",
            columnHeader2: "Current Pool: Total 437",
            EquipmentAndPrefixColumnHeader1: "LT St",
            EquipmentAndPrefixColumnHeader2: "Equipment",
            EquipmentAndPrefixColumnHeader3: "Prefix",
            headerOptionText: "Equipment",
            headerDrpDwnOptionText: "Chassis/Beam",

        }

    }
    public static Tc_97797: any = {

        'data': {
            planning: "Planning",
            unitViewOption: "Unit View",
            multiPrePlanOption: "Multiple Preplan",
            buttonTextValueSearch: "Search",
            buttonTextValueSelectAll: "Select All",
            buttonTextValueDeleteSegment: "Delete Segment",
            BoardCode1: "L1R",
            BoardCode2: "L1C",
            BoardCode3: "LR1",
            BoardCode4: "G19",
            message: "Successfully deleted.",
            freightManagerTitle: "Freight Manager",
            customerNumber: "LGFO18",
            setParameterRadioAndChechBoxFieldName: "Select Type",
            setParameterRadioAndChechBoxOption: "Board",
            codeName: "Board Codes",
        }

    }
    public static Tc_79803: any = {

        'data': {
            tabName: "Planning",
            option: "Delivery",
            strType: "A",
            strDivison: "HJBT JBVAN",
            strAreaType: "MKT",
            strArea: "WB",
            strFleetType: "I",
            strAreaDa: "DA"

        }

    }
    public static Tc_79802: any = {

        'data': {
            tabName: "Planning",
            pickUpOption: "Pick Up",
            strDivison: "HJBT JBVAN",
            strAreaType: "MKT",
            strArea: "DA",
            strTranMd: "I",

        }

    }

    public static Tc_79801: any = {

        'data': {
            tabName: "Planning",
            option: "Unit View",
            setParameterRadioAndChechBoxFieldName: "Select Type",
            setParameterRadioAndChechBoxOption: "Board",
            codeName: "Board Codes",
            BoardCode1: "L1R",
            BoardCode2: "L1C",
            BoardCode3: "LR1",
            BoardCode4: "G19",
            BoardCode5: "L1A",
            BoardCode6: "L1E",
            BoardCode7: "G21",
            BoardCode8: "G23",
        }

    }
    public static Tc_95314: any = {

        'data': {
            freightManager: "Freight Manager",
            BoardCode1: "L1R",
            BoardCode2: "L1C",
            BoardCode3: "LR1",
            BoardCode4: "G19",
            setParameterRadioAndChechBoxFieldName: "Select Type",
            setParameterRadioAndChechBoxOption: "Board",
            codeName: "Board Codes",
        }

    }
    public static Tc_80020: any = {

        'data': {
            tabName: "Planning",
            option: "Pick Up",
            buttonTextValueSavePref: "Save Prefs",
            buttonTextValueSearch: "Search",

            columnHeader1: "PWR/DRVR\nNOTES",
            columnHeader1Value: "",
            columnHeader2: "TCALL\nLOC",
            columnHeader2Value: "DR",
            ProjectcodeName: "projects",
            carriercodeName: "carriers",
            buttonTextValueCreatePreplan: "Create Preplan",
            HeaderOptionCarrier: "Carrier",
            DropDownOption: "Tour",
            buttonTextValueAddSegment: "Add Segment",
            strDivison: "HJBT JBVAN",
            strAreaType: "MKT",
            strArea: "DA",
            strTranMd: "I",
            projectCode: "A!01",
            carrierCode: "MGAS",
            message: "Current tour is saved."
        }

    }
    public static Tc_80023: any = {

        'data': {
            headerOption: "Planning",
            downOption: "Cross Town",
            buttonTextValueSavePref: "Save Prefs",
            buttonTextValueSearch: "Search",
            ProjectCodeName: "projects",
            carrierCodeName: "carriers",
            buttonTextValueCreatePreplan: "Create Preplan",
            projectCode: "+C01",
            carrierCode: "AMEW",
            message: "Preplan Successful"
        }

    }
    public static Tc_79817: any = {

        'data': {
            tabDriver: "Driver",
            optionDriverView: "Driver View",
            fieldName: "Board/Group",
            columnName: "Start",
            requiredText: "OFF",
            tableId: "driverViewTable",
            iconName: "Delete this row",
            getLabelText: "Driver Schedule",
            editThisRowIcon: "Edit this row",
            changesToThisRow: "Save changes to this row",
            deleteThisRowIcon: "Delete this row",
            successfullyUpdatedMsg: "Successfully updated.Insert Normal Schedule completed successfully.",
            deleteSuccessMessage: "Successfully deleted",
            deletedMessage: "Successfully deleted.Schedule inactivated successfully.",
            freightManager: "Freight Manager",
            verifyDriverView: "Driver View",
            BoardCode: "L1C",
            emptyBoardCode: ""
        }
    }

    public static Tc_80858: any = {

        'data': {
            tabName: "Planning",
            option: "Unit View",
            tableId: "results",
            trlrTypeColumnName: "TRLR",
            unitNbrColumnName: "UNIT",
            equipmentTab: "Equipment",
            optionChassisBeam: "Chassis/Beam",
            freightManager: "Freight Manager",
            verifyDriverView: "Driver View",
            BoardCode: "L1C",
            chasisPageTitle: "Container/Chassis Attachment"
        }
    }

    public static Tc_78611: any = {

        'data': {
            tabName: "Planning",
            option: "Pick Up",
            strArea: ["DA", "", "", ""],
            eventMessage: "Preferences updated successfully.",
            columnHeader1: "PWR/DRVR\nNOTES",
            columnHeader2: "HZ\nLD",
            optionUnitView: "Unit View",
            availableTractocolumnText1: "MTY NO PP",
            availableTractocolumnName1: "OBC",
            availableTractocolumnText2: "A",
            availableTractocolumnName2: "DSP",
            availableTractoRequiredText: "UNIT",
            multiPrePlanOption: "Multiple Preplan",
            strType: "A",
            strDivison: "HJBT JBVAN",
            strAreaType: "MKT",
            strTranMd: "I",
            message: "Preferences updated successfully.",
            multiplePreplanMessage: "Successfully updated."
        }

    }
    public static Tc_102744: any = {

        'data': {
            tabName: "Planning",
            option: "Pick Up",
            strArea: ["DA", "", "", ""],
            columnHeader1: "PWR/DRVR\nNOTES",
            columnHeader2: "HZ\nLD",
            optionUnitView: "Unit View",
            availableTractocolumnText1: "MTY NO PP",
            availableTractocolumnName1: "OBC",
            availableTractocolumnText2: "A",
            availableTractocolumnName2: "DSP",
            availableTractoRequiredText: "UNIT",
            optionOrderSegment: "Order Segment",
            headerOptionDriver: "Driver",
            dropDownOptionTruckCheckCall: "Truck Check Call",
            autoDispatchText: "N",
            headerOptionStatus: "Status",
            dropDownOptionDispatch: "Dispatch *",
            strType: "",
            strDivison: "HJBT JBVAN",
            strAreaType: "MKT",
            strTranMd: "I",
            preplanMessage: "Tractor  Preplan Successful",
            message: 'Preplan Successful',
            cityStateCode: "KCMO",
            dispatchCallInfoMsg: "Route Updated Successfully.",
            updatedCityCodeHistory: '"KC MO"',
            BoardCode1: "L1R",
            BoardCode2: "LR1",
            BoardCode3: "G19",
            BoardCode4: "G23",
        }

    }
    public static Tc_80852: any = {

        'data': {
            tabName: "Planning",
            option: "Pick Up",
            strArea: ["DA", "", "", ""],
            columnHeader1: "PWR/DRVR\nNOTES",
            columnHeader2: "HZ\nLD",
            optionUnitView: "Unit View",
            availableTractocolumnText1: "MTY NO PP",
            availableTractocolumnName1: "OBC",
            availableTractocolumnText2: "A",
            availableTractocolumnName2: "DSP",
            availableTractoRequiredText: "UNIT",
            optionOrderSegment: "Order Segment",
            headerOptionDriver: "Driver",
            dropDownOptionTruckCheckCall: "Truck Check Call",
            autoDispatchText: "N",
            headerOptionStatus: "Status",
            dropDownOptionDispatch: "Dispatch *",
            transactionValue: "D",
            strType: "",
            strDivison: "HJBT JBVAN",
            strAreaType: "MKT",
            strTranMd: "I",
            preplanMessage: "Tractor  Preplan Successful",
            message: 'Preplan Successful',
            cityStateCode: "HA0TX",
            dispatchCallInfoMsg: "Route Updated Successfully.",
            BoardCode1: "L1R",
            BoardCode2: "LR1",
            BoardCode3: "G19",
            BoardCode4: "G23",
        }

    }
    public static Tc_80449: any = {

        'data': {
            tabName: "Planning",
            option: "Pick Up",
            recordsCount: "3",
            columnHeader1: "PWR/DRVR\nNOTES",
            columnHeader1Value: "",
            columnHeader2: "TCALL\nLOC",
            columnHeader2Value: "DR",
            tabNameDriver: "Driver",
            optionDriverView: "Driver View",
            fieldName: "Board/Group",
            getDriverAlphaParm1: 1,
            getDriverAlphaParm2: "Order\nNbr",
            getDriverAlphaParm3: "",
            getDriverAlphaParm4: "O\nS",
            getDriverAlphaParm5: "",
            optionDriverPreplan: "Driver Preplan",
            BoardCode1: "L1R",
            BoardCode2: "L1C",
            BoardCode3: "G19",
            BoardCode4: "G20",


        }

    }
    public static Tc_79006: any = {

        'data': {
            tabName: "Planning",
            option: "Unit View",
            getDriverAlphaText1: "MTY NO PP",
            getDriverAlphaColumnName1: "OBC",
            getDriverAlphaRequiredColumn: "UNIT",
            headerOptionDriver: "Driver",
            pickUpOption: "Pick Up",
            columnHeader1: "PWR/DRVR\nNOTES",
            columnHeader2: "HZ\nLD",
            optionDriverPreplan: "Driver Preplan",
            strType: "",
            strDivison: "HJBT JBVAN",
            arr: ["DA", "", "", ""],
            strAreaType: "MKT",
            strArea: "DA",
            strTranMd: "I",
            multiplePreplanMessage: "Successfully updated."
        }

    }
    public static Tc_79775: any = {

        'data': {
            tabDriver: "Driver",
            optionDriverView: "Driver View",
            boardGroupArray: ["L1R", "LR1", "G19", "L1C", "", ""],
            tableId: "driverViewTable",
            tabName: "Planning",
            optionDelivery: "Delivery",
            columnHeader1: "PWR/DRVR\nNOTES",
            columnHeader2: "HZ\nLD",
            optionDriverPreplan: "Driver Preplan",
            optionOrderSegment: "Order Segment",
            strType: "A",
            strDivison: "HJBT JBVAN",
            strAreaType: "MKT",
            strArea: "CH",
            strTranMd: "I",
            multiplePreplanMessage: "Successfully updated.",
            multiplePreplandDeleteMessage: "Successfully deleted"

        }

    }
    public static Tc_80057: any = {

        'data': {

            BoardCode1: "L1A",
            BoardCode2: "L1C",
            BoardCode3: "LR1",
            BoardCode4: "G19",
            verifyAreaType: "A - Area",
            verifyFreightManagerTitle: "Freight Manager",
            setParameterRadioAndChechBoxFieldName: "Select Type",
            setParameterRadioAndChechBoxOption: "Board",
            codeName: "Board Codes",


        }

    }
    public static Tc_79099: any = {

        'data': {
            tabName: "Planning",
            option: "Unit View",
            pickUpOption: "Pick Up",
            availableTractocolumnText1: "MTY NO PP",
            availableTractocolumnName1: "OBC",
            availableTractocolumnText2: "A",
            availableTractocolumnName2: "DSP",
            availableTractoRequiredText: "UNIT",
            optionOrderSegment: "Order Segment",
            strType: "",
            strDivison: "HJBT JBVAN",
            strAreaType: "MKT",
            strArea: ["DA", "", "", ""],
            strTranMd: "I",
            successMessage: "Tractor  Preplan Successful",
            message: 'Preplan Successful',
            BoardCode1: "L1R",
            BoardCode2: "LR1",
            BoardCode3: "G19",
            BoardCode4: "G23",


        }

    }
    public static Tc_79110: any = {

        'data': {
            tabName: "Planning",
            option: "Unit View",
            pickUpOption: "Pick Up",
            transMdIndex: "2",
            recordsCount: 1,
            columnHeader1: "PWR/DRVR\nNOTES",
            columnHeader1Value: "",
            columnHeader2: "TCALL\nLOC",
            columnHeader2Value: "DR",
            optionOrderSegment: "Order Segment",
            radioButtonDriverAlpha: "Driver Alpha",
            strDivison: "HJBT JBVAN",
            strAreaType: "MKT",
            strArea: "DA",
            strTranMd: "I",
        }

    }
    public static Tc_79120: any = {

        'data': {
            tabName: "Planning",
            option: "Unit View",
            pickUpOption: "Pick Up",
            columnHeader1: "PWR/DRVR\nNOTES",
            columnHeader2: "HZ\nLD",
            optionOrderSegment: "Order Segment",
            strType: "",
            strDivison: "HJBT JBVAN",
            strAreaType: "MKT",
            strArea: ["DA", "", "", ""],
            strTranMd: "I",
            availableTractocolumnText1: "MTY NO PP",
            availableTractocolumnName1: "OBC",
            availableTractocolumnText2: "A",
            availableTractocolumnName2: "DSP",
            availableTractoRequiredText: "UNIT",
            projectCode: "+C01",
            carrierCode: "AMEW",
            carrierPreplanMessage: "Carrier  Preplan Successful",
            sucessMesage: 'Preplan Successful',
            BoardCode1: "L1R",
            BoardCode2: "LR1",
            BoardCode3: "G19",
            BoardCode4: "G23",
        }
    }

    public static Tc_80847: any = {

        'data': {
            tabName: "Planning",
            pickUpOption: "Pick Up",
            optionUnitView: "Unit View",
            orderNumberDropDownIndex: 0,
            orderNumberDropDownOption: "Add/View Comments",
            orderNumberDropDownOptionReset: "Reset Appointment",
            orderNumberDropDownOptionReferenceNumber: "Reference Numbers",
            strDivison: "HJBT JBVAN",
            strAreaType: "MKT",
            strArea: "DA",
            strTranMd: "I",
            location: "CHILL",
            successMessage: "COMMENTS UPDATED SUCCESSFULLY",
            title: "Load Appointment Maintenance",
            referenceNumberTitle: "Reference Numbers",
            BoardCode1: "LR1",
            BoardCode2: "L1R",
            BoardCode3: "G19",
            BoardCode4: "L1C",
            typeVerify: "APPT RESET",
            loadAppointmentTitle: "Load Appointment Maintenance"
        }

    }
    public static Tc_80866: any = {

        'data': {
            verifyFreightManagerTitle: "Freight Manager",
            strDivison: "JBVAN",
            strArea: "CH",
            zero: 0
        }

    }
    public static Tc_80868: any = {

        'data': {
            verifyFreightManagerTitle: "Freight Manager",
            strDivison: "JBVAN",
            strArea: "CH",
            zero: 0
        }

    }
    public static Tc_80861: any = {

        'data': {
            freightManagerTitle: "Freight Manager",
            BoardCode1: "LR1",
            zero: 0


        }

    }
    public static Tc_80333: any = {

        'data': {
            tabName: "Planning",
            pickUpOption: "Pick Up",
            strDivison: "HJBT JBVAN",
            strTranMd: "T",
            fleetGroup: "WEST",
            warningMessage: "No Rows Found"

        }

    }
    public static Tc_80438: any = {

        'data': {
            tabName: "Planning",
            pickUpOption: "Pick Up",
            optionUnitView: "Unit View",
            codeName: "Monitor Codes",
            type: "MONITOR",
            typeCode1: "Z",
            typeCode2: "1",
            typeCode3: "2",
            typeCode4: "3",
            eventMessage: "Preference Updated"

        }

    }
    public static Tc_80334: any = {

        'data': {
            tabName: "Planning",
            pickUpOption: "Pick Up",
            strDivison: "HJBT JBVAN",
            strTranMd: "I",
            utilStatus1: "R",
            utilStatus2: "O",

        }

    }
    public static Tc_80321: any = {

        'data': {
            freightManagerTitle: "Freight Manager",
            customerNumber: "LGFO18",
            BoardCode1: "L1A",
            BoardCode2: "L1C",
            BoardCode3: "LR1",
            BoardCode4: "G19",
            setParameterRadioAndChechBoxFieldName: "Select Type",
            setParameterRadioAndChechBoxOption: "Board",
            codeName: "Board Codes",

        }

    }
    public static Tc_80027: any = {

        'data': {
            tabName: "Planning",
            pickUpOption: "Pick Up",
            inputTextBoxDivison: "division",
            inputTextBoxAreaType: "areaType",
            inputTextBoxArea: "area",
            inputTextBoxTransitMode: "transitMode",
            indexOfInput: 1,
            strDivison: "HJBT JBVAN",
            strAreaType: "MKT",
            strTranMd: "I",
            strArea: "DA",
            orderDetails: "Open Order Details",
            errorMessage: "Please select at least one order.",
            indexOfInput1: 2,
            questionMark: '?',
            comma: ',',
            one: '1',
            m: 'M'

        }

    }
    public static Tc_80864: any = {

        'data': {
            centralCustomerInformationText: "Central Customer Information - Business Search",
            driverScheduleText: "Driver Schedule",
            freightManagerTitle: "Freight Manager",
            searchText1: "CCBDA",
            centralCustomerText: "Central Customer Information - Business Search",
            searchText2: "CAR142",
            driverSchedule: "Driver Schedule",
            searchText3: "330281",
            checkCallDetailsTitle: "Check Call Details"
        }

    }
    public static Tc_80860: any = {

        'data': {
            freightManagerTitle: "Freight Manager",
            BoardCode1: "L1C",
            BoardCode2: "L1B",
            BoardCode3: "L1R",
            BoardCode4: "LD1",
        }

    }
    public static Tc_94997: any = {
        'data': {
            unitViewUrl: 'http://fm.jbhunt.com/FreightManager2/ui/unitView.iface?preRequestAction=unitView.initialize',
            unitViewTitle: 'Unit View',
            pickUpViewTitle: 'Pickup View',
            multiplePreplanViewtitle: 'Tractor Multiple Preplan',
            custPoolViewtitle: 'Customer Lookup',
            trueCheckCallViewtitle: 'Check Call Details',
            title: 'JB Hunt Freight Manager System',
            tabName: "Planning",
            pickUpOption: "Pick Up",
            optionUnitView: "Unit View",
            buttonTextValueSearch: "Search",
            multiPrePlanOption: "Multiple Preplan",
            equipmentTab: "Equipment",
            optionCustomerPool: "Customer Pool",
            headerOptionDriver: "Driver",
            headerOptionStatus: "Status",
            headerDropDownOptionComment: "Comment",
            dropDownOptionDispatch: "Dispatch *",
            transactionValue: "D",
            transactionValueT: "T",
            dropDownOptionTruckCheckCall: "Truck Check Call",
            headerDropDownOptionArrivalLoaded: 'Arrival/Loaded',
            headerDropDownOptionTerminate: "Terminate",
            optionOrderSegment: "Order Segment",
            BoardCode1: "L1R",
            BoardCode2: "LR1",
            BoardCode3: "G19",
            BoardCode4: "G23",
            availableTractocolumnText1: "MTY NO PP",
            availableTractocolumnName1: "OBC",
            availableTractocolumnText2: "A",
            availableTractocolumnName2: "DSP",
            availableTractoRequiredText: "UNIT",
            strType: "",
            strDivison: "HJBT JBVAN",
            strAreaType: "MKT",
            strArea: ["DA", "CH", "", ""],
            strTranMd: "I",
            customerPool_Division: "HJBT JBVAN",
            customerPool_CustCode: "WADE20",
            customerPool_Column1: "Prefix",
            customerPool_Column1Value: "JBHU",
            customerPool_Column2: "LT St",
            customerPool_Column2Value: "EMPTY",
            customerPool_RequiredColumn: "Equipment",
            commentPopup_TrlrCode: "JBHU",
            update_Message: "Successfully updated.",
            terminate_CustomerNo: "WADE20"   //"DSAKE"
        }

    }
    public static Tc_133039: any = {
        'data': {
            appLink: '360 Platform',
            platformPageTitle: 'J.B. Hunt 360',
            pageTitle: 'Account',
            accountSearchInputFieldValue: 'INGRBR',
            invoices: 'Invoices',
            accessorialRule: 'ACCESSORIAL RULE',
            hjbtJbvan: 'HJBT JBVAN',
            chargeAuthorizationBill: 'Charge Authorization  & Bill',
            addNewRule: 'Add New Rule',
            ruleType: 'Rule Type',
            detentionp: 'DETENTIONP',
            billingType: 'Billing Type',
            jop: 'JOP',
            authorizationType: '24hr Customer',
            manualauth: 'MANUALAUTH',
            save: 'Save'
        }
    }

    public static Tc_132716: any = {
        'data': {
            appLink: '360 Platform',
            platformPageTitle: 'J.B. Hunt 360',
            pageTitle: 'Account',
            accountSearchInputFieldValue: 'INGRBR',
            invoices: 'Invoices',
            accessorialRule: 'ACCESSORIAL RULE',
            hjbtJbvan: 'HJBT JBVAN',
            chargeAuthorizationBill: 'Charge Authorization  & Bill',
            addNewRule: 'Add New Rule',
            ruleType: 'Rule Type',
            chargeRowNumber: '1',
            detentionp: 'DETENTIONP',
            billingType: 'Billing Type',
            jop: 'JOP',
            ruleTypeNumber: '2',
            authorization: 'AUTHORIZATION',
            authorizationTypeNumber: '7',
            manualauth: 'MANUALAUTH',
            save: 'Save'
        }
    }


}
