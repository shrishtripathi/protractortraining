'use strict';

export class DataProvider {

    public static Common: any = {

        jbhuntUrl: 'https://my.jbhunt.com/',
        PaceUrl: 'https://dcs.jbhunt.com/pace/login.jsp',
        Fuel_SurchargeUrl: 'http://fuelsurcharge.jbhunt.com/fuelsurcharge',
        Offer_ManagementUrl: 'https://offermanagement.jbhunt.com/offerManagement/',
        Ltl_ConsolidatorUrl: 'http://ltlconsolidator.jbhunt.com/app_ltlConsolidator/pages/ltlScreen.iface',
        freightManager2: 'http://fm.jbhunt.com/FreightManager2/common/index.iface?'
    }

    static centerScreenLoadCreateVerificationData = {

        tenderText: "TENDER",
        projectCode: 'LTL7'
        
    }
    
    static icsTenderLoad = {
        tabName: 'Planning',
        tabOption: 'Order Segment',
        projectCode: '1954',
        carrierCode:'MGAS',
        successMessage: 'Carrier Preplan Successful'
    }

    public static eomDcsHighValueLoadCreateData = {
        enterpriseOrderManagementTitle: 'Enterprise Order Management Search',
        billToCode: 'SIGR94',
        originCode: 'ONTCA',
        searchSkeletonButtonId: 'eomSearchMain:advNext',
        zero: '0',
        skeletonPickScreenTitle: 'Select Pickup date',
        reasonCode: '262',
        standardNewLoadScreenTitle: 'STANDARD NEW LOAD',
        monitorValue: 'H',
        BeginTime: '19:00',
        EndTime: '23:00',
        commentType: 'C',
        comment: 'THIS IS A TEST ORDER ONLY DO NOT PROCESS!',
        commentsText: 'Comments (1)'
    }

    static eomDcsFoodSafetyLoadCreateData = {
        billToCode: 'SIGR94',
        originCode: 'ONTCA',
        zero: '0',
        reasonCode: '262',
        standardNewLoadScreenTitle: 'STANDARD NEW LOAD',
        monitorValue: 'F',
        empty: 'EMPTY',
        BeginTime: '19:00',
        EndTime: '23:00',
        commentType: 'C',
        comment: 'THIS IS A TEST ORDER ONLY DO NOT PROCESS!',
        commentsText: 'Comments (1)',
    }

    static eomDcsFoodSafetyLoadCreateVerificationData = {
        eomTitle: 'Enterprise Order Management Search',
        searchOption: 'ORDER #',
        monitorValue: 'F'
    }

    public static eomLoadCreateHazmatIcsFlatbedData = {
        enterpriseOrderManagementTitle: 'Enterprise Order Management Search',
        billToCode: 'KNDA3',
        originCode: 'FIVA2',
        destinationCode: 'LOWIAE',
        searchSkeletonButtonId: 'eomSearchMain:advNext',
        zero: '0',
        skeletonPickScreenTitle: 'Select Pickup date',
        mode: 'ICS',
        standardNewLoadScreenTitle: 'STANDARD NEW LOAD',
        projectCode: 'DALT',
        equipmentType: 'FLATBED',
        monitorValue: '',
        classificationCheckboxValue: 'HAZMAT',
        hazmatDropDownValue: 'Y',
        BeginTime: '19:00',
        EndTime: '23:00',
        commentType: 'C',
        comment: 'THIS IS A TEST ORDER ONLY DO NOT PROCESS!',
        commentsText: 'Comments (1)'
    }
    
    public static highValueIcsFlatbedEomLoadCreateData = {
        enterpriseOrderManagementTitle: 'Enterprise Order Management Search',
        billToCode: 'KNDA3',
        originCode: 'FIVA2',
        destinationCode: 'LOWIAE',
        searchSkeletonButtonId: 'eomSearchMain:advNext',
        zero: '0',
        skeletonPickScreenTitle: 'Select Pickup date',
        mode: 'ICS',
        standardNewLoadScreenTitle: 'STANDARD NEW LOAD',
        projectCode: 'DALT',
        equipmentType: 'FLATBED',
        monitorValue: 'H',
        BeginTime: '19:00',
        EndTime: '23:00',
        commentType: 'C',
        comment: 'THIS IS A TEST ORDER ONLY DO NOT PROCESS!',
        commentsText: 'Comments (1)'
    }

    public static foodSafetyCreateLoadICSBrokerageData = {

        billToCode: 'KNDA3',
        origin: 'FIVA2',
        destination: 'LOWIAE',
        mode: 'ICS',
        projectCode:'DALT',
        startTime: '19:00',
        endTime: '23:00',
        empty: "EMPTY",
        reasonCode: '262',
        monitorValue: 'F',
        commentType: 'C',
        comment: 'THIS IS A TEST ORDER DO NOT PROCESS',
        commentsText: 'Comments (1)',
        orderNumber: '',
}

static onePickOneDropEomOrderCreateIcsFlatbed = {

    billToCode: 'KNDA3',
    origin: 'FIVA2',
    destination: 'LOWIAE',
    optionValue: 'FLATBED',
    projectCode: 'DALT',
    zero: '0',
    skeletonPickScreenTitle: 'Select Pickup date',
    standardNewLoadScreenTitle: 'STANDARD NEW LOAD',
    monitorCode: '',
    stopOneBeginTime: '19:00',
    stopOneEndTime: '23:00',
    stop99Date: '  /  /    ',
    stop99BeginTime: '  :  ',
    stop99EndTime: '  :  ',
    hazmatDropDownValue: 'Y',
    commentType: 'C',
    comment: 'THIS IS A TEST ORDER ONLY DO NOT PROCESS!',
    commentsText: 'Comments (1)',
    searchSkeletonButtonId: 'eomSearchMain:advNext',
    reasonCode: '262',
    monitorValue: '',
    orderNumber: ''

}

    static multiPickupOrMultiDropLoadCreateEom = {
        billToCode: 'KNDA3',
        origin: 'FIVA2',
        destination: 'LOWIAE',
        zero: '0',
        skeletonPickScreenTitle: 'Select Pickup date',
        projectCode: 'DALT',
        empty: 'Empty',
        shipperDropDown: 'SHIPPER',
        shipperCode: 'COTAAR',
        receiverDropDown: 'RECEIVER',
        receiverCode: 'cccod6',
        stopOneBeginTime: '19:00',
        stopOneEndTime: '23:00',
        loadUnlodedByDropDownOption: 'CUSTOMER',
        driverCountDropDownOption: 'N',
        standardNewLoadScreenTitle: 'STANDARD NEW LOAD',
        commentType: 'C',
        comment: 'THIS IS A TEST ORDER ONLY DO NOT PROCESS!',
        commentsText: 'Comments (1)',
        reasonCode: '262',
        orderNumber: '',
        originRamp: ''
    }
    
    static fm2HighValueAndHazmatCheckCallsData = {
        custPoolViewtitle: 'Customer Lookup',
            title: 'JB Hunt Freight Manager System',
            tabName: "Planning",
            tabOption: "Order Segment",
            loadNumber: "M536475",
            tractorNo: "330934",
            equipment: "230042",
            checkcalltabName: 'Status',
            checkCalloption: 'Arrival/Loaded'
    }

    static loadSearchData = {
        enterpriseOrderManagementTitle: 'Enterprise Order Management Search',
        searchOption: 'ORDER #',
        precisionLableText: 'FOCUS Load # status is AVAILABLE',
        orderDetaisPageTitle: 'Enterprise Order Management - #'
    }

    static loadDispatchWithComment = {
        equipment: "Equipment",
        customerPool: "Customer Pool",
        divison: "HJBT JBVAN",
        custCode: "LGFO18",
        Prefix: "Prefix",
        jbhu: "JBHU",
        ltSt: "LT St",
        empty: "EMPTY",
        planning: "Planning",
        orderSegment: "Order Segment",
        windowNumber: '1',
        headerDropDownOptionDispatch: "Dispatch *",
        optionOrderSegment: "Order Segment",
        customerPool_Division: "HJBT JBVAN",
        customerPool_CustCode: "WADE20",
        customerPool_Column1: "Prefix",
        customerPool_Column1Value: "JBHU",
        customerPool_Column2: "LT St",
        customerPool_Column2Value: "EMPTY",
        customerPool_RequiredColumn: "Equipment",
        commentPopup_TrlrCode: "JBHU",
        update_Message: "Successfully updated."
    }

    public static findingAequipmentNumber = {
        equipmentTab: "Equipment",
        optionCustomerPool: "Customer Pool",
        customerPool_Division: "HJBT JBVAN",
        customerPool_CustCode: "LGFO18",
        customerPool_Column1: "Prefix",
        customerPool_Column1Value: "JBHZ",
        customerPool_Column2: "LT St",
        customerPool_Column2Value: "EMPTY",
        customerPool_RequiredColumn: "Equipment",
        commentPopup_TrlrCode: "JBHZ",
        equipmentNumber:''
    }      

    public static findingAJbcDriver = {
        tabName: 'Planning',
        option: 'Unit View',
        boardCode1: 'L1R',
        boardCode2: 'LR1',
        boardCode3: 'G19',
        boardCode4: 'G20',
        oBCError: 'MTY NO PP',
        dSPSTT: 'A',
        tractorNumber: '',
    }

    public static onePickDropLoadData = {
        enterpriseOrderManagementTitle: 'Enterprise Order Management Search',
        code: 'GEEC',
        originCode: 'LGFO18',
        searchSkeletonButtonId: 'eomSearchMain:advNext',
        zero: '0',
        skeletonPickScreenTitle: 'Select Pickup date',
        standardNewLoadScreenTitle: 'FOCUS NEW LOAD',
        stopOneBeginTime: '19:00',
        stopOneEndTime: '23:00',       
        monitorValue: '',
        commentType: 'C',
        comment: 'THIS IS A TEST ORDER ONLY DO NOT PROCESS!',
        commentsText: 'Comments (1)',
        orderNumber: '',
        originRamp: '',
        division: 'HJBT JBVAN',
        modeType: 'TRAIN'
    }

    static eomHighValueLoadCreateData = {
        enterpriseOrderManagementTitle: 'Enterprise Order Management Search',
            billToCode: 'GEEC',
            origin: 'LGFO18',
            zero: '0',
            skeletonPickScreenTitle: 'Select Pickup date',
            mode: 'IM',
            standardNewLoadScreenTitle: 'FOCUS NEW LOAD',
            monitorValue: 'H',
            stopOneBeginTime: '19:00',
            stopOneEndTime: '23:00',
            stop99Date: '  /  /    ',
            stop99BeginTime: '  :  ',
            stop99EndTime: '  :  ',
            startTime: '19:00',
            endTime: '23:00',
            commentType: 'C',
            comment: 'THIS IS A TEST ORDER ONLY DO NOT PROCESS!',
            commentsText: 'Comments (1)',
            orderNumber: '',
            originRamp: ''

    }

    static hazmatLoadCreateData = {
        billToCode: 'GEEC',
        origin: 'LGFO18',
        zero: '0',
        skeletonPickScreenTitle: 'Select Pickup date',
        standardNewLoadScreenTitle: 'FOCUS NEW LOAD',
        monitorCode: ' ',
        classificationCheckboxValue: 'HAZMAT',
        stopOneBeginTime: '19:00',
        stopOneEndTime: '23:00',
        stop99Date: '  /  /    ',
        stop99BeginTime: '  :  ',
        stop99EndTime: '  :  ',
        hazmatDropDownValue: 'Y',
        orderNumber: '',
        commentType: 'C',
        comment: 'THIS IS A TEST ORDER ONLY DO NOT PROCESS!',
        commentsText: 'Comments (1)',
        division: 'HJBT JBVAN',
        modeType: 'TRAIN',
        originRamp: ''
    }

    static internationalLoadData = {
        billToCode: 'KNDA3',
        origin: 'FIVA2',
        destination: 'LOWIAE',
        mode: 'IM',
        startTime: '19:00',
        endTime: '23:00',
        empty: "EMPTY",
        solictor: 'CCBDA',
        broker: 'TRLAA8',
        reasonCode: '262',
        orderNumber: '',
        originRamp: ''
    }

    static internationalLoadVerificationData = {
        load: 'ORDER #'
    }     

    static onePickOrDropTruckModeLoadData = {
        enterpriseOrderManagementTitle: 'Enterprise Order Management Search',
        code: 'GEEC',
        originCode: 'LGFO18',
        searchSkeletonButtonId: 'eomSearchMain:advNext',
        zero: '0',
        skeletonPickScreenTitle: 'Select Pickup date',
        reasonCode: '262',
        standardNewLoadScreenTitle: 'FOCUS NEW LOAD',
        stopOneBeginTime: '19:00',
        stopOneEndTime: '23:00',
        stop99Date: '  /  /    ',
        stop99BeginTime: '  :  ',
        stop99EndTime: '  :  ',
        monitorValue: '',
        commentType: 'C',
        comment: 'THIS IS A TEST ORDER DO NOT PROCESS',
        commentsText: 'Comments (1)',
        orderNumber: '',
        originRamp: '',
        initials: ''
    }

    static searchJBCDriverData = {
        tabName: 'Planning',
        option: 'Unit View',
        boardCode1: 'L1R', //'L1A',
        boardCode2: 'LR1', //'L1E', 
        boardCode3: 'G19', //'G21', 
        boardCode4: 'G20', //'G23', 
        oBCError: 'MTY NO PP',
        dSPSTT: 'A',
        unitNumber: ''
    }

    static createPreplanData = {
        tabName: 'Planning',
        tabOption: 'Order Segment',
        radialValue: 'Tractor',
        successMessage: 'Tractor  Preplan Successful'
    }

    static eomPreplanVerification = {
        eomTitle: 'Enterprise Order Management Search',
        dropDownOption: 'ORDER #',
        availableText: 'AVAILABLE',
    }

    static fm2DispatchData = {
        tabName: 'Planning',
        tabOption: 'Order Segment',
        headerDropDownOptionComment: 'Comment',
        headerDropDownOptionDispatch: 'Dispatch *'
    }

    static centreScreenCheckCallVerification = {
        emptiedText: 'EMPTIED'
    }

    static onepickuponedropPrePlan = {
        loadNumber: 'M529402',
        tractorNo: '332023',
        TCall_Location_origenmap: 'D?',
        tabName: 'Planning',
        tabOption: 'Order Segment',
        radialValue: 'Tractor',
        tractorMultiplePreplanPageTitle: 'Tractor Multiple Preplan'
    }

    static jbtHazmatLoadData = {
        billToCode: 'GEEC',
        origin: 'LGFO18',
        zero: '0',
        skeletonPickScreenTitle: 'Select Pickup date',
        standardNewLoadScreenTitle: 'FOCUS NEW LOAD',
        monitorCode: '',
        classificationCheckboxValue: 'HAZMAT',
        stopOneBeginTime: '19:00',
        stopOneEndTime: '23:00',
        hazmatDropDownValue: 'Y',
        empty: 'Empty',
        reasonCode: '262',
        stop99Date: '  /  /    ',
        stop99BeginTime: '  :  ',
        stop99EndTime: '  :  ',
    }

    public static Suite_demo: any = {
        'data': {
            orderNumber: ''
        }
    } 
    
    static icsInternationalLoadCreateData = {
        billToCode: 'KNDA3',
        origin: 'FIVA2',
        destination: 'LOWIAE',
        mode: 'ICS',
        projectCode:'DALT',
        startTime: '19:00',
        endTime: '23:00',
        empty: "EMPTY",
        solictor: 'CCBDA',
        broker: 'TRLAA8',
        reasonCode: '262',
        orderNumber: '',
        originRamp: ''
    }

    static fm2searchLoadData = {
        tabName: 'Planning',
        tabOption: 'Order Segment'
    }

    static entPreplanVerificationData = {
        enterpriseDashboardTitle: 'Enterprise Dashboard',
        viewname: 'scott',
        user: 'Nasty Nate McLovin'
    }

    public static Tc_187556: any = {
        'data': {
            'icsInternationalLoadCreateData' : DataProvider.icsInternationalLoadCreateData,
        }
    }

    public static Tc_187593: any = {
        'data': {
            'onePickOrDropTruckModeLoadData': DataProvider.onePickOrDropTruckModeLoadData,
            'searchJBCDriverData': DataProvider.searchJBCDriverData,
            'createPreplanData': DataProvider.createPreplanData
        }
    }    

    public static Tc_188740: any = {
        'data': {
            'onePickOrDropTruckModeLoadData': DataProvider.onePickOrDropTruckModeLoadData,
            'searchJBCDriverData': DataProvider.searchJBCDriverData,
            'createPreplanData': DataProvider.createPreplanData,
            'fm2DispatchData': DataProvider.fm2DispatchData,
            'centreScreenCheckCallVerification': DataProvider.centreScreenCheckCallVerification
        }
    }

    public static Tc_187618: any = {
        'data': {
            'onePickOrDropTruckModeLoadData': DataProvider.onePickOrDropTruckModeLoadData,
            'searchJBCDriverData': DataProvider.searchJBCDriverData,
            'createPreplanData': DataProvider.createPreplanData,
            'eomPreplanVerification': DataProvider.eomPreplanVerification
        }
    }

    public static Tc_177580: any = {
        'data': {
            eomTitle: 'Enterprise Order Management Search',
            searchOption: 'ORDER #',
            searchValue: 'M529605',
            dispatchStatus: 'Dispatched'
        }
    }


    static eomDispatchVerification = {
        eomTitle: 'Enterprise Order Management Search',
        searchOption: 'ORDER #',
        dispatchStatus: 'Dispatched'
    }


    public static Tc_188726: any = {
        'data': {
           eomTitle: 'Enterprise Order Management Search',
           searchOption: 'ORDER #',
           searchValue: 'M541396',
           status: 'Emptied'
      }
    }

    public static Tc_187712: any = {
        'data': {
            'onePickOrDropTruckModeLoadData': DataProvider.onePickOrDropTruckModeLoadData,
            'searchJBCDriverData': DataProvider.searchJBCDriverData,
            'createPreplanData': DataProvider.createPreplanData,
            'eomDispatchVerification': DataProvider.eomDispatchVerification,
            'fm2DispatchData': DataProvider.fm2DispatchData,
            'findingAequipmentNumber': DataProvider.findingAequipmentNumber,
        }
    }

    public static Tc_182252: any = {
        'data': {
            eomTitle: 'Enterprise Order Management Search',
            orderNumber: 'M354688',
            tabName: "ORDER #",
            commentType: 'C',
            zero: '0',
            one: '1',
            updateMessage: 'COMMENTS UPDATED SUCCESSFULLY',
            commentOne: 'THIS IS A TEST DO NOT BOOK IN PRODUCTION!',
            commentTwo: 'DO NOT BOOK THIS LOAD IN PRODUCTION!'
        }
    }

    public static Tc_182553: any = {
        'data': {
            index: '0',
            nameValue: 'LOAD_NUMBER',
            operaterValue: 'eq',
            loadNumber: 'M354688'
        }
    }

    public static Tc_188105: any = {
        'data': {
            'foodSafetyCreateLoadICSBrokerageData' : DataProvider.foodSafetyCreateLoadICSBrokerageData,
        }
    }

    public static Tc_186198: any = {
        'data': {
            orderNumber: 'M536115',
            tender: 'TENDER'
        }
    }

    public static Tc_177262: any = {
        'data': {
           'loadCreateData': DataProvider.hazmatLoadCreateData 
        }
    }

    public static Tc_187453: any = {
        'data': {
            searchOption: 'ORDER #',
        }
    }

    public static Tc_186644: any = {
        'data': {
            tabName: "Planning",
            pickUpOption: "Pick Up",
            strDivison: "HJBT JBVAN",
            strAreaType: "MKT",
            strArea: "DA",
            strTranMd: "I",
            message: "Preferences updated successfully.",
            strType: "A-Area"
        }
    }

    public static Tc_177404: any = {
        'data': {
            verifyFreightManagerTitle: 'Freight Manager',
            tabName: 'Planning',
            option: 'Order Segment',
            orderNumber: 'M529402',
            preplannedOrder: '332023',
            tableId: 'segments',
            power: 'Power',
            driver: 'Driver'
        }
    }
    public static Tc_185435: any = {
        'data': {
            verifyFreightManagerTitle: 'Freight Manager',
            tabName: 'Planning',
            option: 'Order Segment',
            orderNumber: 'M534419',
            mgas: 'MGAS',
            tableId: 'segments',
            carrier: 'Carrier',
            code: 'Code',
            tabNames: 'Planning',
            tabOption: 'Order Segment'
        }
    }

    static eominternationalLoadCreateICSFlatbed = {
       
        billToCode:'KNDA3',
        origin: 'FIVA2',
        destination: 'LOWIAE',
        reasonCode:'262',
        solictor:'CCBDA',
        broker:'TRLAA8',
        startTime: '19:00',
        endTime: '23:00',
        projectCode: 'DALT',
        empty: 'Empty',
        commentType: 'C',
        comment: 'THIS IS A TEST ORDER ONLY DO NOT PROCESS!',
        commentsText: 'Comments (1)',
        equipmentType:'FLATBED'
    
   }

    static eomMultiPickDropLoadCreate = {
        billToCode: 'GEEC',
        origin: 'LGFO18',
        standardNewLoadScreenTitle: 'FOCUS NEW LOAD',
        monitorCode: '',
        classificationCheckboxValue: 'HAZMAT',
        scheduledAppointmentBeginTime: '19:00',
        scheduledAppointmentEndTime: '23:00',
        hazmatDropDownValue: 'N',
        empty: 'Empty',
        rateCode: '376',
        shipperDropDown: 'SHIPPER',
        shipperCode: 'LGFO17',
        ReceiverCode: 'COWECE',
        ReceiverDropDown: 'RECEIVER',
        loadedOnDropDownOption: 'FLOOR',
        driverCountDropDownOption: 'N',
        loadUnlodedByDropDownOption: 'CUSTOMER',
        comment: 'THIS IS A TEST ORDER DO NOT PROCESS',
        commentsText: 'Comments (1)',
        commentType: "C",
        loadNumber: ''
    }

    public static Tc_188966: any = {
        'data': {
            'eomMultiPickDropLoadCreate': DataProvider.eomMultiPickDropLoadCreate

        }
    }


    public static Tc_185027: any = {
        'data': {
            billToCode: 'GEEC',
            origin: 'LGFO18',
            zero: '0',
            skeletonPickScreenTitle: 'Select Pickup date',
            standardNewLoadScreenTitle: 'FOCUS NEW LOAD',
            monitorCode: '',
            classificationCheckboxValue: 'HAZMAT',
            stopOneBeginTime: '19:00',
            stopOneEndTime: '23:00',
            hazmatDropDownValue: 'N',
            empty: 'Empty',
            shipperDropDown: 'SHIPPER',
            shipperCode: 'LGFO17',
            ReceiverCode: 'COWECE',
            ReceiverDropDown: 'RECEIVER',
            loadedOnDropDownOption: 'FLOOR',
            driverCountDropDownOption: 'N',
            loadUnlodedByDropDownOption: 'CUSTOMER',
            commentType: "C",
            comment: 'THIS IS A TEST ORDER ONLY',
            commentsText: 'Comments (1)'
        }
    }

    public static Tc_177478: any = {
        'data': {
            'eomOnePickOrDropLoadCreate': {
                code: 'GEEC',
                originCode: 'LGFO18',
                searchSkeletonButtonId: 'eomSearchMain:advNext',
                mode: 'IM',
                beginTime: '19:00',
                endTime: '23:00',
                startTime: ' ',
                endingTime: ' ',
                monitorValue: '',
                loadNumber: ''
            },
            'findingAJbcDriver': {
                tabName: 'Planning',
                option: 'Unit View',
                boardCode1: 'L1R',
                boardCode2: 'LR1',
                boardCode3: 'G19',
                boardCode4: 'G20',
                oBCError: 'MTY NO PP',
                dSPSTT: 'A',
                tractorNumber: '',
            },
            'onePickOrOneDropPreplan': {
                TCall_Location_origenmap: 'D?',
                tabName: 'Planning',
                tabOption: 'Order Segment',
                radialValue: 'Tractor'
            },
            'OnePickOrOneDropAndMultiPickOrDropAndHighValueAndHazmatDispatch': {
                equipmentNumber: '',
                chassisNumber: '',
                custPoolViewtitle: 'Customer Lookup',
                title: 'JB Hunt Freight Manager System',
                tabName: "Planning",
                equipmentTab: "Equipment",
                optionCustomerPool: "Customer Pool",
                headerOptionDriver: "Driver",
                headerOptionStatus: "Status",
                headerDropDownOptionComment: "Comment",
                transactionValue: "D",
                headerDropDownOptionDispatch: "Dispatch*",
                optionOrderSegment: "Order Segment",
                customerPool_Division: "HJBT JBVAN",
                customerPool_CustCode: "WADE20",
                customerPool_Column1: "Prefix",
                customerPool_Column1Value: "JBHU",
                customerPool_Column2: "LT St",
                customerPool_Column2Value: "EMPTY",
                customerPool_RequiredColumn: "Equipment",
                commentPopup_TrlrCode: "JBHU",
                update_Message: "Successfully updated.",
                terminate_CustomerNo: "WADE20"
            }
        }
    }

    public static Tc_186622: any = {
        'data': {
            tabName: 'Planning',
            option: 'Delivery',
            value: 'A',
            division: 'HJBT JBVAN',
            areaType: 'MKT',
            area: 'DA',
            value1: 'R',
            value2: 'O',
            value3: 'I',
            value4: 'D',
            message: 'Preferences updated successfully.'

        }
    }

    // public static Tc_177262: any = {
    //     'data': {
    //         text: 'GEEC',
    //         text1: 'LGFO18',
    //         division: 'HJBT JBVAN',
    //         mode: 'TRAIN',
    //         modeIM: 'IM',

    //     }
    // }

    public static Tc_187727: any = {
        'data': {
            arrivalText: 'ARRIVAL-1',
            'onePickOrDropTruckModeLoadData': DataProvider.onePickOrDropTruckModeLoadData,
            'searchJBCDriverData': DataProvider.searchJBCDriverData,
            'createPreplanData': DataProvider.createPreplanData,
            'fm2DispatchData': DataProvider.fm2DispatchData,
            'loadNumber': DataProvider.onePickOrDropTruckModeLoadData.orderNumber,
            'findingAequipmentNumber': DataProvider.findingAequipmentNumber,

        }
    }

    public static Tc_184307: any = {
        'data': {
            tabName: 'Planning',
            tabOption: 'Order Segment',
        }
    }

    public static Tc_178959: any = {
        'data': {
            viewName: 'view',
            enterpriseDashboardTitle: 'Enterprise Dashboard',
            visibility: 'Personal',
            viewOption: 'Create User Id',
            userId: 'JISQJB4'

        }
    }


    public static Tc_176848: any = {
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



    public static Tc_185250: any = {
        'data': {
            custPoolViewtitle: 'Customer Lookup',
            title: 'JB Hunt Freight Manager System',
            tabName: "Planning",
            equipmentTab: "Equipment",
            optionCustomerPool: "Customer Pool",
            headerOptionDriver: "Driver",
            headerOptionStatus: "Status",
            headerDropDownOptionComment: "Comment",
            transactionValue: "D",
            tractorNo: "332023",
            orderNO: "M529402",
            headerDropDownOptionDispatch: "Dispatch *",
            optionOrderSegment: "Order Segment",
            customerPool_Division: "HJBT JBVAN",
            customerPool_CustCode: "LGFO18",
            customerPool_Column1: "Prefix",
            customerPool_Column1Value: "JBHU",
            customerPool_Column2: "LT St",
            customerPool_Column2Value: "EMPTY",
            customerPool_RequiredColumn: "Equipment",
            commentPopup_TrlrCode: "JBHU",
            update_Message: "Successfully updated.",
            terminate_CustomerNo: "LGFO18"   //"DSAKE"  WADE20
        }

    }

    public static Tc_185243: any = {
        'data': {
            loadNumber: 'M536704',
            tractorNo: '328208',
            TCall_Location_origenmap: 'D?',
            tabName: 'Planning',
            tabOption: 'Order Segment',
            radialValue: 'Tractor'
        }
    }

    public static Tc_187027: any = {
        'data': {
           'onePickDropLoadData': DataProvider.onePickDropLoadData,
           'loadSearchData': DataProvider.loadSearchData
        }
    }

    public static Tc_186638: any = {
        'data': {
            tabName: "Planning",
            option: "Unit View",
            division: "HJBT JBVAN",
            fieldSelectType: "Select Type",
            selectTypeOption: "Board",
            fieldBeginDate: "Begin Date",
            beginDateAllOption: "All",
            fieldEndDate: "End Date",
            endDateAllOption: "All",
            fieldPreplannedUnits: "Show Preplanned Units",
            preplannedUnitsShowAllOption: "Show All",
            fieldUnitStatus: "Unit Status",
            unitStatusAllOption: "All",
            fieldNextUtilization: "Next Utilization",
            NextUtilizationAllOption: "All",
            codeName: "Board Codes",
            boardCode1: "L1R",
            boardCode2: "LR1",
            boardCode3: "G19",
            boardCode4: "G20",
            orderNumber: "Order Number",
            driverAlphaCode: "Driver Alpha Code",
            assignedTrailerType: "Assigned Trailer Type",
            delvApptDate: "Delv Appt Date",
            driverHazmat: "Driver Hazmat Qualified",
            driverFleetManager: "Driver Fleet Manager",
            fleetCode: "Fleet Code"
        }

    }

    public static Tc_188102: any = {
        'data': {
            enterpriseOrderManagementTitle: 'Enterprise Order Management Search',
            searchOption: 'PROJECT CODE',
            searchValue: 'LTL7',
            productDescription: '23162',
            boxesOption: 'TOTES',
            hdlQuantity: '500',
            totalWeight: '500',
            startTime: '08:00',
            endTime: '23:00',
            reasonCode: '262',
            detailsTab: 'frmLtlInformation:details',
        }
    }


    public static Tc_185293: any = {
        'data': {
            unNum: "un1001",
            materialWeight: "100",
            noOfPackage: "10",
            telNumber1: "123",
            telNumber2: "456",
            telNumber3: "7890",
            shipperName: "Test",
            contractNumber: "0987654321"
        }
    }

    public static Tc_185292: any = {
        'data': {
            orderNumber: 'M529585',
            tabName: 'Safety Briefing',
            dropDownOptions: 'Create New Briefing',
            briefingType: 'High Value',
            trailerPrefix: 'JBHU',
            trailer: '317529'
        }
    }

    public static Tc_177002: any = {
        'data': {
            'loadCreateData': DataProvider.eomMultiPickDropLoadCreate,
            'loadSeachData': {
                enterpriseOrderManagementTitle: 'Enterprise Order Management Search',
                searchOption: 'ORDER #',
                precisionLableText: 'FOCUS Load # status is AVAILABLE',
                orderDetaisPageTitle: 'Enterprise Order Management - #'
                },
            monitorValue: '',
            stop1: '1 - P',
            stop2: '2 - P',
            stop3: '3 - D',
            stop4: '99 - D',
        }
    }

    public static Tc_185254: any = {
        'data': {
            freightManagerTitle: 'Freight Manager',
            tabName: 'Planning',
            option: 'Order Segment',
            orderNumber: 'M530249',
            tableId: 'segments',
            power: 'Power',
            driver: 'Driver',
            preplannedOrder: '328285',
            checkcalltabName: 'Status',
            checkCalloption: 'Arrival/Loaded'
        }
    }

    public static Tc_177853: any = {
        'data': {
            tabName: 'Planning',
            option: 'Order Segment',
            orderNumber: 'M529402',
            one: '1'
        }
    }

    public static Tc_185247: any = {
        'data': {
            tabName: 'Planning',
            option: 'Order Segment',
            orderNumber: 'M532659',
            tractorNumber: '328417',
            originRamp: 'D?'
        }
    }

    public static Tc_187034: any = {
        'data': {
            'searchJBCDriverData': DataProvider.searchJBCDriverData,
        }
    }

    public static Tc_178994: any = {
        'data': {
            freightManagerTitle: 'Freight Manager',
            tabName: 'Planning',
            option: 'Order Segment',
            orderNumber: 'M530413',
            tableId: 'segments',
            power: 'Disp',
            driver: 'Nbr'
        }
    }

    public static Tc_184948: any = {
        'data': {
            'onePickDropLoadData': DataProvider.onePickDropLoadData
        }
    }    

    public static Tc_177365: any = {
        'data': {
            'loadCreateData': DataProvider.hazmatLoadCreateData,
            'loadSearchData': {
                enterpriseOrderManagementTitle: 'Enterprise Order Management Search',
                searchOption: 'ORDER #',
                precisionLableText: 'FOCUS Load # status is AVAILABLE',
                monitorValue: ' ',
                classificationText: ' ',
                stop1: '1 - P',
                stop99: '99 - D'
            },
            monitorLabelText: 'HAZMAT',
            classificationLabelText: 'HAZMAT'
        }
    }

    public static Tc_177372: any = {
        'data': {
            'loadCreateData': DataProvider.eomMultiPickDropLoadCreate,
            'findingAJbcDriver': DataProvider.findingAJbcDriver,
            'prePlanData': DataProvider.createPreplanData
        }
    }

    public static Tc_183165: any = {
        'data': {
            'loadCreateData': DataProvider.hazmatLoadCreateData,
            'loadSearchData': {
                enterpriseOrderManagementTitle: 'Enterprise Order Management Search',
                searchOption: 'ORDER #',
                precisionLableText: 'FOCUS Load # status is AVAILABLE'
            },
            monitorLabelText: 'HAZMAT'
        }
    }

    public static Tc_180988: any = {
        'data': {
            tabName: 'Equipment',
            tabOption: 'Customer Pool',
            division: 'HJBT JBVAN',
            Cust_code: 'LGFO18',
            headerprefix: 'Prefix',
            prefixcolvalue: 'JBHU',
            headerLT_St: 'LT St',
            LT_StColvalue: 'EMPTY',
            Equipmen: 'Equipment',
            planingTab: 'Planning',
            Orderseg: 'Order Segment',
            orderNumber: 'M536527',
            tableId: 'segments',
            power: 'Power',
            driver: 'Driver',
            stat: 'Status',
            Cmt: 'Comment',
            tcode: 'JBHU',
            tnumber: '309587',
            customerNumber: 'LGFO18',
            headerDropDownOptionComment: "Comment",
            headerDropDownOptionDispatch: "Dispatch *",
        }
    }

    public static Tc_177222: any = {
        'data': {
            'loadCreateData':DataProvider.eomHighValueLoadCreateData,
            'loadSeachData': DataProvider.loadSearchData,
            monitorValue: 'H',
            classificationsValue: 'HIGHVALUE'
        }
    }

    public static Tc_185245: any = {
        'data': {
            'loadCreateData':DataProvider.eomHighValueLoadCreateData,
            'findingJbcDriverData':DataProvider.searchJBCDriverData,
            'createPreplanData':DataProvider.createPreplanData,
        }
    }

    public static Tc_185029: any = {
        'data': {
            'internationalLoadData': DataProvider.internationalLoadData            
        }

    }

    public static Tc_182479: any = {
        'data': {
            load: 'ORDER #'
        }

    }

    public static Tc_184961: any = {
        'data': {
            'eomHighValueLoadCreateData':DataProvider.eomHighValueLoadCreateData
        }
    }

    public static Tc_187920: any = {
        'data': {
            'multiPickupOrMultiDropLoadCreateEom': DataProvider.multiPickupOrMultiDropLoadCreateEom,
            tabName: 'Planning',
            tabOption: 'Order Segment',
            projectCode: 'DALT',
        }

    }

    static highValueIcsBrokerageEom = {
        billToCode: 'KNDA3',
        origin: 'FIVA2',
        destination: 'LOWIAE',
        zero: '0',
        skeletonPickScreenTitle: 'Select Pickup date',
        standardNewLoadScreenTitle: 'STANDARD NEW LOAD',
        projectCode: 'DALT',
        monitorValue: 'H',
        classificationsValue: 'HIGHVALUE',
        stopOneBeginTime: '19:00',
        stopOneEndTime: '23:00',
        stop99Date: '  /  /    ',
        stop99BeginTime: '  :  ',
        stop99EndTime: '  :  ',
        commentType: "C",
        comment:'THIS IS A TEST ORDER ONLY. DO NOT PROCESS!',
        reasonCode: '262',
        orderNumber: '',
        originRamp: '',
    }

    public static Tc_187968: any = {
        'data': {
            'highValueIcsBrokerageEom': DataProvider.highValueIcsBrokerageEom,
        }

    }

    static icsMaritimeHighValueLoadCreate = {
        billToCode: 'KNJE1',
        origin: 'PIMC9',
        destination: 'BTBA46',
        zero: '0',
        skeletonPickScreenTitle: 'Select Pickup date',
        newLoadScreenTitle: 'NEW LOAD',
        projectCode: 'DALT',
        monitorValue: 'H',
        classificationsValue: 'HIGHVALUE',
        stopOneBeginTime: '00:01',
        stopOneEndTime: '23:59',
        stop99Date: '  /  /    ',
        stop99BeginTime: '  :  ',
        stop99EndTime: '  :  ',
        commentType: 'C',
        comment: 'THIS IS A TEST ORDER DO NOT PROCESS',
        commentsText: 'Comments (1)',
        orderNumber: '',
    }

    public static Tc_192165: any = {
        'data': {
            'icsMaritimeHighValueLoadCreate': DataProvider.icsMaritimeHighValueLoadCreate,
        }

    }


    public static Tc_176993: any = {
        'data': {
            'loadCreateData':DataProvider.onePickDropLoadData,
            'loadSeachData': DataProvider.loadSearchData,        
            monitorValue: ' ',
            stop1: '1 - P',
            stop99: '99 - D'
        }
    }

    public static Tc_183026: any = {
        'data': {
            billToCode: 'GEEC',
            origin: 'LGFO18',
            zero: '0',
            skeletonPickScreenTitle: 'Select Pickup date',
            standardNewLoadScreenTitle: 'FOCUS NEW LOAD',
            monitorCode: '',
            classificationCheckboxValue: 'REEFER',
            stopOneBeginTime: '19:00',
            stopOneEndTime: '23:00',
            stop99Date: '  /  /    ',
            stop99BeginTime: '  :  ',
            stop99EndTime: '  :  ',
            hazmatDropDownValue: 'Y'
        }
    }

    static multiPickDroploadCreateData = {
        billToCode: 'GEEC',
        origin: 'LGFO18',
        zero: '0',
        skeletonPickScreenTitle: 'Select Pickup date',
        standardNewLoadScreenTitle: 'FOCUS NEW LOAD',
        monitorCode: '',
        classificationCheckboxValue: 'HAZMAT',
        stopOneBeginTime: '19:00',
        stopOneEndTime: '23:00',
        hazmatDropDownValue: 'N',
        empty: 'Empty',
        shipperDropDown: 'SHIPPER',
        shipperCode: 'LGFO17',
        ReceiverCode: 'COWECE',
        ReceiverDropDown: 'RECEIVER',
        loadedOnDropDownOption: 'FLOOR',
        driverCountDropDownOption: 'N',
        loadUnlodedByDropDownOption: 'CUSTOMER',
        commentType: "C",
        comment: 'THIS IS A TEST ORDER ONLY',
        commentsText: 'Comments (1)',
        orderNumber: '',
        originRamp: ''
    }

    static dispatchData = {
        custPoolViewtitle: 'Customer Lookup',
        title: 'JB Hunt Freight Manager System',
        tabName: "Planning",
        equipmentTab: "Equipment",
        optionCustomerPool: "Customer Pool",
        headerOptionDriver: "Driver",
        headerOptionStatus: "Status",
        headerDropDownOptionComment: "Comment",
        transactionValue: "D",
        headerDropDownOptionDispatch: "Dispatch *",
        optionOrderSegment: "Order Segment",
        customerPool_Division: "HJBT JBVAN",
        customerPool_CustCode: "LGFO18",
        customerPool_Column1: "Prefix",
        customerPool_Column1Value: "JBHU",
        customerPool_Column2: "LT St",
        customerPool_Column2Value: "EMPTY",
        customerPool_RequiredColumn: "Equipment",
        commentPopup_TrlrCode: "JBHU",
        update_Message: "Successfully updated.",
        terminate_CustomerNo: "LGFO18",   //"DSAKE"  WADE20
        equipmentNo: '',
        chassisNo: ''

    }

    static multiPickDropCheckCallData = {
        freightManagerTitle: 'Freight Manager',
        tabName: 'Planning',
        option: 'Order Segment',
        tableId: 'segments',
        power: 'Power',
        driver: 'Driver',
        checkcalltabName: 'Status',
        checkCalloption: 'Arrival/Loaded',
        arrivalTime: '01:00',
        loadTime: '01:30',
        arrivalTime1: '2:00',
        loadTime1: '02:30',
        quantity: '1',
        weight: '500',
        seal: '1',
        poNbr: '1',
        bolNbr: '1'
    }

    static accountSearchData = {
        accountSearchValue: 'GEEC',
        tabValue: 'Publication'
    }

    public static Tc_178239: any = {
        'data': {
            'multiPickDroploadCreateData': DataProvider.multiPickDroploadCreateData,
            'searchJBCDriverData': DataProvider.searchJBCDriverData,
            'createPreplanData': DataProvider.createPreplanData,
            'dispatchData': DataProvider.dispatchData,
            'multiPickDropCheckCallData': DataProvider.multiPickDropCheckCallData
        }
    }

    public static Tc_187437: any = {
        'data': {
            enterpriseOrderManagementTitle: 'Enterprise Order Management Search',
            code: 'GEEC',
            originCode: 'LGFO18',
            searchSkeletonButtonId: 'eomSearchMain:advNext',
            zero: '0',
            skeletonPickScreenTitle: 'Select Pickup date',
            reasonCode: '262',
            standardNewLoadScreenTitle: 'FOCUS NEW LOAD',
            stopOneBeginTime: '19:00',
            stopOneEndTime: '23:00',
            stop99Date: '  /  /    ',
            stop99BeginTime: '  :  ',
            stop99EndTime: '  :  ',
            monitorValue: '',
            commentType: 'C',
            comment: 'THIS IS A TEST ORDER DO NOT PROCESS',
            commentsText: 'Comments (1)',
            orderNumber: ''
        }
    }

    public static Tc_182335: any = {
        'data': {

            tabName: "Planning",
            tabOption: "Order Segment",
            loadNumber: "M527466",
            projectCode: 'A!01',
            carrierCode: 'MGAS',

        }
    }
    public static Tc_185221: any = {
        'data': {
            'onepickuponedropLoadCreateData': DataProvider.Tc_184948,
            'jbcDriverData': DataProvider.Tc_187034,
            'onepickuponedropPrePlan': DataProvider.onepickuponedropPrePlan
        }
    }

    public static Tc_187073: any = {

        'data': {
            'loadData': DataProvider.hazmatLoadCreateData,
            'driverData': DataProvider.searchJBCDriverData,
            'preplanData': DataProvider.createPreplanData,
             'loadDispatchWithComment': DataProvider.loadDispatchWithComment       
        }

    }

    public static Tc_183292: any = {

        'data': {
            searchOption: "LOAD #",
            loadStatus: "EMPTY",
            arrivalHead: "Arrival",
            completionHead: "Completion"
        }

    }

    public static Tc_177652: any = {
        'data': {
            dispatchText: 'DISPATCHED ON',
            completeText: 'C'
        }
    }

    public static Tc_185209: any = {
        'data': {
            orderManagementPageTitle: 'Order Management'
        }
    }

    public static Tc_185296: any = {
        'loadData': {
            loadNumber: "M541317",
        },
        freightManagerPagetitle: 'JB Hunt Freight Manager System',
        tabName: 'Planning',
        tabOption: 'Order Segment',
        tractorNo: "325777"
    }

    public static Tc_189117: any = {
        'data': {
            searchOption: 'ORDER #',
            loadNumber: 'M528605',
        }
    }

    public static Tc_185257: any = {
        'data': {
            'fm2HighValueAndHazmatCheckCallsData': DataProvider.fm2HighValueAndHazmatCheckCallsData,
            'hazmatLoadCreateData': DataProvider.hazmatLoadCreateData,
            'searchJBCDriverData': DataProvider.searchJBCDriverData,

        }
    }

    public static Tc_185023: any = {
        'data': {
            accountSearchValue: 'GEEC',
            tabValue: 'Publication'
        }
    }


    public static Tc_184311: any = {
        'data': {
            freightManagerPagetitle: 'JB Hunt Freight Manager System',
            tabName: "Planning",
            tabOption: "Order Segment",
            loadNumber: "M541376",
            tractorNo: "328252",
            headerOptionStatus: "Status",
            headerDropDownOptionDispatch: "Dispatch *",
            transactionValue: "D"
        }
    }

    public static Tc_185024: any = {
        'data': {
            accountSearchData: DataProvider.accountSearchData,
            divisionValue: 'HJBT JBVAN',
        }
    }

    public static Tc_185239: any = {
        'data': {
            divisionValue: 'HJBT JBHA',
        }
    }

    public static Tc_181906: any = {
        'data': {
            loadNumber: 'M532749',
            tabName: 'Planning',
            tabOption: 'Order Segment',
            tenderStat: 'SENT',
            tractorMultiplePreplanPageTitle: 'Tractor Multiple Preplan',
            tableId: 'segments',
            power: 'Tender',
            stat: 'Stat'
        }
    }

    public static Tc_185352: any = {
        'data': {
            loadNumber: 'M529349',
            tenderText: 'TENDER',
            carr: ''
        }
    }

    public static Tc_186823: any = {
        'data': {
            enterpriseDashboardTitle: 'Enterprise Dashboard',
            user: 'Daniel Joseph Garcia Carvajal',
            dispatchText: 'Dispatched',
        }
    }
    public static Tc_186749: any = {
        'data': {
            enterpriseDashboardTitle: 'Enterprise Dashboard',
            user: 'Daniel Joseph Garcia Carvajal',
            dispatchText: 'Dispatched',
        }
    }

    public static Tc_184918: any = {
        'data': {
            divisionValue: 'HJBT JBHA'
        }
    }

    static eomFoodSafetyLoadCreate: any = {
        enterpriseOrderManagementTitle: 'Enterprise Order Management Search',
        searchOption: 'PROJECT CODE',
        searchValue: 'LTL7',
        productDescription: '23162',
        boxesOption: 'TOTES',
        hdlQuantity: '500',
        totalWeight: '500',
        startTime: '08:00',
        endTime: '23:00',
        reasonCode: '262',
        detailsTab: 'frmLtlInformation:details',
        monitorValue:'F',
        billToCode:'JBLOB6',
        orderNumber: '',
        origin: '',
        destination: ''
    }

    public static Tc_188232: any = {
        'data': {
        'eomFoodSafetyLoadCreate': DataProvider.eomFoodSafetyLoadCreate
        }
    }


    public static Tc_189134: any = {
        'data': {
            enterpriseOrderManagementTitle: 'Enterprise Order Management Search',
            billToCode: 'MOCHBA',
            mode: 'ICS',
            monitorValue: 'F',
            stopOneBeginTime: '19:00',
            stopOneEndTime: '23:00',
            stop99Date: '  /  /    ',
            stop99BeginTime: '  :  ',
            stop99EndTime: '  :  ',
            startTime: '19:00',
            endTime: '23:00',
            division: 'HJBT JBHA',
            vMode: 'TRUCK',
            searchOption: 'ORDER #'
        }
    }
    static searchEquipmentNumber = {
        tabName: 'Planning',
        option: 'Unit View',
        boardCode1: 'L1R', //'L1A',
        boardCode2: 'LR1', //'L1E', 
        boardCode3: 'G19', //'G21', 
        boardCode4: 'G20', //'G23', 
        oBCError: 'MTY NO PP',
        dSPSTT: 'A',
        unitNumber: ''
    }

    
    public static fm2dispatchVerificationData = {
        dispatchText: 'DISPATCHED ON',
        completeText: 'C'
    }

    public static Tc_187738: any = {
        'data': {
            'onePickOrDropTruckModeLoadData': DataProvider.onePickOrDropTruckModeLoadData,
            'searchJBCDriverData': DataProvider.searchJBCDriverData,
            'findingAequipmentNumber': DataProvider.findingAequipmentNumber,
            'createPreplanData': DataProvider.createPreplanData,
            'fm2DispatchData': DataProvider.fm2DispatchData,
            'fm2DispatchVerification': DataProvider.fm2dispatchVerificationData
        }
    }

    public static Tc_189089: any = {
        'data': {
            enterpriseOrderManagementTitle: 'Enterprise Order Management Search',
            billToCode: 'MOCHBA',
            mode: 'ICS',
            monitorValue: 'F',
            stopOneBeginTime: '19:00',
            stopOneEndTime: '23:00',
            stop99Date: '  /  /    ',
            stop99BeginTime: '  :  ',
            stop99EndTime: '  :  ',
            startTime: '19:00',
            endTime: '23:00',
            division: 'HJBT JBHA',
            vMode: 'TRUCK'
        }
    }

    public static Tc_192187: any = {
        'data': {
            enterpriseOrderManagementTitle: 'Enterprise Order Management Search',
            billToCode: 'KNJE1',
            origin: 'PIMC9 ',
            destinationCode: 'BTBA46',
            zero: '0',
            skeletonPickScreenTitle: 'Select Pickup date',
            mode:'ICS',
            standardNewLoadScreenTitle: 'NEW LOAD',
            projectCode: 'DALT',
            stopOneBeginTime: '00:01',
            stopOneEndTime: '23:59',
            stop99Date: '  /  /    ',
            stop99BeginTime: '  :  ',
            stop99EndTime: '  :  ',
            monitorValue: 'F',
            commentType: 'C',
            comment: 'THIS IS A TEST ORDER ONLY DO NOT PROCESS!',
            commentsText: 'Comments (1)',
            equipmentDetails:'FLATBED',
            hazmatDropDownValue:'N',
            reasonCode: '262',
        }
    }
    public static Tc_191423: any = {
        'data': {

            billToCode: 'SIGR94',
            originCode:'ONTCA',
            divison: "HJBT JBDCS",
            monitorValue: '',     
            startTime: '19:00',
            endTime: '23:00',
            stop99Date: '  /  /    ',
            stop99BeginTime: '19:00',
            stop99EndTime: '23:00',
            reasonCode: '262',
        }
    }

    public static Tc_192175: any = {
        'data': {
            enterpriseOrderManagementTitle: 'Enterprise Order Management Search',
            billToCode: 'KNJE1',
            origin: 'PIMC9 ',
            destinationCode: 'BTBA46',
            zero: '0',
            skeletonPickScreenTitle: 'Select Pickup date',
            mode:'ICS',
            standardNewLoadScreenTitle: 'NEW LOAD',
            projectCode: 'DALT',
            stopOneBeginTime: '00:01',
            stopOneEndTime: '23:59',
            stop99Date: '  /  /    ',
            stop99BeginTime: '  :  ',
            stop99EndTime: '  :  ',
            monitorValue: '',
            commentType: 'C',
            comment: 'THIS IS A TEST ORDER ONLY DO NOT PROCESS!',
            commentsText: 'Comments (1)',
            hazmatDropDownValue:'Y',
            reasonCode: '262',
            classificationCheckboxValue : 'HAZMAT',
        }
    }

    static eomIcsMaritimeFlatBedRackLoadCreateData: any = {
        enterpriseOrderManagementTitle: 'Enterprise Order Management Search',
        billToCode: 'KNJE1',
        origin: 'PIMC9 ',
        destinationCode: 'BTBA46',
        zero: '0',
        skeletonPickScreenTitle: 'Select Pickup date',
        mode: 'ICS',
        standardNewLoadScreenTitle: 'NEW LOAD',
        projectCode: 'DALT',
        stopOneBeginTime: '00:01',
        stopOneEndTime: '23:59',
        stop99Date: '  /  /    ',
        stop99BeginTime: '  :  ',
        stop99EndTime: '  :  ',
        monitorValue: '',
        commentType: 'C',
        comment: 'THIS IS A TEST ORDER ONLY DO NOT PROCESS!',
        commentsText: 'Comments (1)',
        equipmentDetails: 'FLATBED',
        hazmatDropDownValue: 'N',
        reasonCode: '262',

    }

    public static Tc_192191: any = {
        'data': {
            'icsMaritimeFlatBedFlatRackLoadCreateData': DataProvider.eomIcsMaritimeFlatBedRackLoadCreateData
        }
    }

    public static Tc_190868: any = {
        'data': {
        'jbtHazmatLoaddata': DataProvider.jbtHazmatLoadData
    }
    }

    public static Tc_177331: any = {
        'data': {
            'onePickDropLoadData': DataProvider.onePickDropLoadData,
            'searchJBCDriverData': DataProvider.searchJBCDriverData,
            'createPreplanData': DataProvider.createPreplanData,
            tender: 'TENDER'
        }
    }


    public static Tc_187912: any = {
        'data': {
            enterpriseOrderManagementTitle: 'Enterprise Order Management Search',
            billToCode: 'KNDA3',
            originCode: 'FIVA2',
            destinationCode: 'LOWIAE',
            searchSkeletonButtonId: 'eomSearchMain:advNext',
            zero: '0',
            skeletonPickScreenTitle: 'Select Pickup date',
            mode: 'ICS',
            standardNewLoadScreenTitle: 'STANDARD NEW LOAD',
            projectCode: 'DALT',
            stopOneBeginTime: '19:00',
            stopOneEndTime: '23:00',
            stop99Date: '  /  /    ',
            stop99BeginTime: '  :  ',
            stop99EndTime: '  :  ',
            monitorValue: '',
            commentType: 'C',
            comment: 'THIS IS A TEST ORDER ONLY DO NOT PROCESS!',
            commentsText: 'Comments (1)'
        }
    }

    public static Tc_191337: any = {
        'data': {

            'eomDcsHighValueLoadCreateData':DataProvider.eomDcsHighValueLoadCreateData
        }
    }

    public static Tc_191304: any = {
        'data': {

            'eomDcsFoodSafetyLoadCreateData':DataProvider.eomDcsFoodSafetyLoadCreateData
        }
    }

    public static Tc_191437: any = {
        'data': {
            'eomDcsFoodSafetyLoadCreateData':DataProvider.eomDcsFoodSafetyLoadCreateData,
            'eomDcsFoodSafetyLoadCreateVerificationData':DataProvider.eomDcsFoodSafetyLoadCreateVerificationData
        }
    }

    public static Tc_187678: any = {
        'data': {
            'onePickOrDropTruckModeLoadData': DataProvider.onePickOrDropTruckModeLoadData,
            'searchJBCDriverData': DataProvider.searchJBCDriverData,
            'findingAequipmentNumber': DataProvider.findingAequipmentNumber,
            'createPreplanData': DataProvider.createPreplanData,
            'fm2DispatchData': DataProvider.fm2DispatchData
        }
    }

    public static Tc_183341: any = {

        'data': {
            searchOption: "LOAD #",
            loadStatus: "EMPTY",
            arrivalHead: "Arrival",
            completionHead: "Completion",
            classificationsValue: "HIGHVALUE"
        }

    }
    public static Tc_188212: any = {
        'data': {
            enterpriseOrderManagementTitle: 'Enterprise Order Management Search',
            billToCode: 'MOCHBA',
            originCode: 'FIVA2',
            destinationCode: 'LOWIAE',
            searchSkeletonButtonId: 'eomSearchMain:advNext',
            zero: '0',
            skeletonPickScreenTitle: 'Select Pickup date',
            mode: 'ICS',
            standardNewLoadScreenTitle: 'STANDARD NEW LOAD',
            projectCode: 'DALT',
            stopOneBeginTime: '19:00',
            stopOneEndTime: '23:00',
            stop99Date: '  /  /    ',
            stop99BeginTime: '  :  ',
            stop99EndTime: '  :  ',
            monitorValue: '',
            commentType: 'C',
            comment: 'THIS IS A TEST ORDER ONLY DO NOT PROCESS!',
            commentsText: 'Comments (1)'
        }
    }

    public static Tc_187497: any = {
        'data': {
            'onePickOrDropTruckModeLoadData': DataProvider.onePickOrDropTruckModeLoadData,
            'searchJBCDriverData': DataProvider.searchJBCDriverData,
            'createPreplanData': DataProvider.createPreplanData
        }
    }

    public static Tc_182373: any = {
        'data': {
            'internationalLoadData': DataProvider.internationalLoadData,
            'internationalLoadVerificationData': DataProvider.internationalLoadVerificationData,
            'searchJBCDriverData': DataProvider.searchJBCDriverData,
            'createPreplanData': DataProvider.createPreplanData,
            tender: 'TENDER'
        }
    }

    public static Tc_178127: any = {
        'data': {
            enterpriseDashboardTitle: 'Enterprise Dashboard',
            viewname: 'scott',
            user: 'Nasty Nate McLovin'
        }
    }

    public static Tc_179628: any = {
        'data': {
            'onePickOrDropTruckModeLoadData': DataProvider.onePickOrDropTruckModeLoadData,
            'searchLoadData': DataProvider.fm2searchLoadData,
            'searchJBCDriverData': DataProvider.searchJBCDriverData,
            'createPreplanData': DataProvider.createPreplanData,
            'preplanVerificationData': DataProvider.entPreplanVerificationData
        }
    }

    public static Tc_190128: any = {
        'data' : {
           'eominternationalLoadCreateICSFlatbed' : DataProvider.eominternationalLoadCreateICSFlatbed
        }
    }
 
    public static Tc_190395: any = {
        'data': {

            enterpriseOrderManagementTitle: 'Enterprise Order Management Search',
            billToCode: 'MOCHBA',
            mode: 'ICS',
            monitorValue: 'F',
            stop99Date: '  /  /    ',
            stop99BeginTime: '  :  ',
            stop99EndTime: '  :  ',
            startTime: '19:00',
            endTime: '23:00',
        }
    }
    public static Tc_190362: any = {
        'data': {

            enterpriseOrderManagementTitle: 'Enterprise Order Management Search',
            billToCode: 'MOCHBA',
            origin: 'LGFO18',
            zero: '0',
            skeletonPickScreenTitle: 'Select Pickup date',
            mode: 'ICS',
            standardNewLoadScreenTitle: 'FOCUS NEW LOAD',
            monitorValue: 'H',
            stopOneBeginTime: '19:00',
            stopOneEndTime: '23:00',
            stop99Date: '  /  /    ',
            stop99BeginTime: '  :  ',
            stop99EndTime: '  :  ',
            startTime: '19:00',
            endTime: '23:00',
            commentType: 'C',
            comment: 'THIS IS A TEST ORDER ONLY DO NOT PROCESS!',
            commentsText: 'Comments (1)'
        }
    }

    public static Tc_188741: any = {
        'data': {
            loadNumber: 'M539010'
        }
    }
    public static Tc_188112: any = {
        'data': {
            enterpriseOrderManagementTitle: 'Enterprise Order Management Search',
            billToCode: 'KNDA3',
            originCode: 'FIVA2',
            destinationCode: 'LOWIAE',
            searchSkeletonButtonId: 'eomSearchMain:advNext',
            zero: '0',
            skeletonPickScreenTitle: 'Select Pickup date',
            mode: 'ICS',
            standardNewLoadScreenTitle: 'STANDARD NEW LOAD',
            projectCode: 'DALT',
            stopOneBeginTime: '19:00',
            stopOneEndTime: '23:00',
            stop99Date: '  /  /    ',
            stop99BeginTime: '  :  ',
            stop99EndTime: '  :  ',
            monitorValue: '',
            commentType: 'C',
            comment: 'THIS IS A TEST ORDER ONLY DO NOT PROCESS!',
            commentsText: 'Comments (1)'
        }
    }

    public static Tc_190757: any = {
        'data': {
            'icsTenderLoad':DataProvider.icsTenderLoad,
            'multiPickupOrMultiDropLoadCreateEom': DataProvider.multiPickupOrMultiDropLoadCreateEom
        }
    }

    public static Tc_178920: any = {

        'data': {
            arrival1: "ARRIVAL-1",
            shipperStatus: "DISPATCHED"
        }

    }
    public static Tc_187433: any = {
        'data': {
            billToCode: 'KNDA3',
            origin: 'FIVA2',
            destination: 'LOWIAE',
            mode: 'ICS',
            projectCode:'DALT',
            startTime: '19:00',
            endTime: '23:00',
            empty: "EMPTY",
            solictor: 'CCBDA',
            broker: 'TRLAA8',
            reasonCode: '262',
            orderNumber: '',
            originRamp: ''
        }

    }

    public static Tc_189147: any = {
        'data': {
            tabName: "ORDER #",
            searchValue: "M523077",
            searchLoadsID: "eomSearchMain:advOrderSearch",
            pageLoadText: "Searching Skeletons",
        }
    }

    public static Tc_188621: any = {
        'data': {
            freightManagerTitle: 'Freight Manager',
            tabName: 'Planning',
            option: 'Order Segment',
            orderNumber: 'M532052',
            tableId: 'segments',
            power: 'Power',
            driver: 'Driver',
            preplannedOrder: '330609',
            checkcalltabName: 'Status',
            checkCalloption: 'Arrival'
        }
    }

    public static Tc_185430: any = {
        'data': {
            shipperCode: 'LGFO18',
            receiverCode: 'CCBDA',
        }
    }

    public static Tc_188620: any = {
        'data': {
            freightManagerTitle: 'Freight Manager',
            tabName: 'Planning',
            option: 'Order Segment',
            orderNumber: 'M455726',
            tableId: 'segments',
            power: 'Power',
            driver: 'Driver',
            preplannedOrder: '356626',
            checkcalltabName: 'Status',
            checkCalloption: 'Loaded'
        }
    }

    public static Tc_190118: any = {
        'data': {
           'onePickOneDropEomOrderCreateIcsFlatbed': DataProvider.onePickOneDropEomOrderCreateIcsFlatbed
        }
    }

    public static Tc_191452: any = {
        'data': {
           'onePickOneDropEomOrderCreateIcsFlatbed': DataProvider.onePickOneDropEomOrderCreateIcsFlatbed
        }
    }

    public static Tc_192622: any = {
        'data': {

            tabName: "Planning",
            tabOption: "Order Segment",
            loadNumber: "M542620",
            projectCode: 'AKHI',
            carrierCode: 'MGAS',
            successMessage: 'Carrier Preplan Successful'
        }
    }

    public static Tc_190121: any = {
        'data': {

            'highValueIcsFlatbedEomLoadCreateData':DataProvider.highValueIcsFlatbedEomLoadCreateData
        }
    }

    public static Tc_190126: any = {
        'data': {

            'eomLoadCreateHazmatIcsFlatbedData':DataProvider.eomLoadCreateHazmatIcsFlatbedData
        }
    }

    public static Tc_190120: any = {
        'data': {
            billToCode: 'KNDA3',
            origin: 'FIVA2',
            destination: 'LOWIAE',
            mode: 'ICS',
            equipmentType:'FLATBED',
            stop2Dept:'SHIPPER',
            stop2DeptCode:'COTAAR',
            stop3Dept:'RECEIVER',
            stop3DeptCode:'CCCOD6',
            startTime: '19:00',
            endTime: '23:00',
            projectCode: 'DALT',
            empty: 'Empty',
            shipperDropDown: 'SHIPPER',
            shipperCode: 'COTAAR',
            ReceiverDropDown: 'RECEIVER',
            ReceiverCode: 'cccod6',
            stopOneBeginTime: '19:00',
            stopOneEndTime: '23:00',
            loadUnlodedByDropDownOption: 'CUSTOMER',
            driverCountDropDownOption: 'N',
            standardNewLoadScreenTitle: 'STANDARD NEW LOAD',
            commentTitle: 'Enter',
            reasonCode: '262',
            orderNumber: '',
            originRamp: '',
            commentType: 'C',
            comment: 'THIS IS A TEST ORDER DO NOT PROCESS',
            hazmatDropDownValue: 'Y'
        }

    }

    public static Tc_177600: any = {
        'data': {
            orderNumber: 'M529585',
            tabName: 'Safety Briefing',
            dropDownOptions: 'Create New Briefing',
            briefingType: 'High Value',
            trailerPrefix: 'JBHU',
            trailer: '317529'
        }
    }

    public static Tc_177601: any = {
        'data': {
            unNum: "un1001",
            materialWeight: "100",
            noOfPackage: "10",
            telNumber1: "123",
            telNumber2: "456",
            telNumber3: "7890",
            shipperName: "Test",
            contractNumber: "0987654321"
        }
    }

    public static Tc_192055: any = {

        'data': {
            'centerScreenLoadCreateVerificationData': DataProvider.centerScreenLoadCreateVerificationData,
            'eomFoodSafetyLoadCreate': DataProvider.eomFoodSafetyLoadCreate
        }

    }

    public static Tc_188622: any = {
        'data': {
            freightManagerTitle: 'Freight Manager',
            tabName: 'Planning',
            option: 'Order Segment',
            orderNumber: 'M455726',
            tableId: 'segments',
            power: 'Power',
            driver: 'Driver',
            preplannedOrder: '356626',
            checkcalltabName: 'Status',
            checkCalloption: 'Unloaded',
            checkCalloptionSpot: 'Spot',  
            customerCode : 'LGFO18'          
        }
    }
}