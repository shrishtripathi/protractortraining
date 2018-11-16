'use strict';

export class DataDemo {

    public static Common: any = {

        jbhuntUrl: 'https://my.jbhunt.com/',
        PaceUrl: 'https://dcs.jbhunt.com/pace/login.jsp',
        Fuel_SurchargeUrl: 'http://fuelsurcharge.jbhunt.com/fuelsurcharge',
        Offer_ManagementUrl: 'https://offermanagement.jbhunt.com/offerManagement/',
        Ltl_ConsolidatorUrl: 'http://ltlconsolidator.jbhunt.com/app_ltlConsolidator/pages/ltlScreen.iface',
        freightManager2: 'http://fm.jbhunt.com/FreightManager2/common/index.iface?'
    }

    public static Suite_demo: any = {
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
            stop99Date: '  /  /    ',
            stop99BeginTime: '  :  ',
            stop99EndTime: '  :  ',
            hazmatDropDownValue: 'Y',
            orderNumber:"",
            enterpriseOrderManagementTitle: 'Enterprise Order Management Search',
            searchOption: 'ORDER #',
            precisionLableText: 'FOCUS Load # status is AVAILABLE',
            monitorLabelText: 'HAZMAT',
            classificationLabelText: 'HAZMAT'           
        }
    }

    public static Test: any = {
        'data': {
            'loadCreateData': {
                        billToCode: 'GEEC',
                        origin: 'LGFO18',
                        zero: '0',
                        skeletonPickScreenTitle: 'Select Pickup date',
                        standardNewLoadScreenTitle: 'FOCUS NEW LOAD',
                        monitorCode: '',
                        classificationCheckboxValue: 'HAZMAT',
                        stopOneBeginTime: '19:00',
                        stopOneEndTime: '23:00',
                        stop99Date: '  /  /    ',
                        stop99BeginTime: '  :  ',
                        stop99EndTime: '  :  ',
                        hazmatDropDownValue: 'Y',
                        orderNumber:""
            },
            'loadSearchData': {                
                        enterpriseOrderManagementTitle: 'Enterprise Order Management Search',
                        searchOption: 'ORDER #',
                        precisionLableText: 'FOCUS Load # status is AVAILABLE'               
            },
            monitorLabelText: 'HAZMAT',
            classificationLabelText: 'HAZMAT'
        }
    }

    public static Test2: any = {
        'data': {
            'loadCreateData': {
                enterpriseOrderManagementTitle: 'Enterprise Order Management Search',
                code: 'GEEC',
                originCode: 'LGFO18',
                searchSkeletonButtonId: 'eomSearchMain:advNext',
                zero: '0',
                skeletonPickScreenTitle: 'Select Pickup date',
                standardNewLoadScreenTitle: 'FOCUS NEW LOAD',
                stopOneBeginTime: '19:00',
                stopOneEndTime: '23:00',
                stop99Date: '  /  /    ',
                stop99BeginTime: '  :  ',
                stop99EndTime: '  :  ',
                monitorValue: '',
                commentType: 'C',
                comment: 'THIS IS A TEST ORDER ONLY DO NOT PROCESS!',
                commentsText: 'Comments (1)',
                orderNumber: '',
                originRamp:''
            },
            'findingAJbcDriver': {
                tabName: "Planning",
                option: "Unit View",
                boardCode1: "L1R",
                boardCode2: "LR1",
                boardCode3: "G19",
                boardCode4: "G20",
                oBCError: "MTY NO PP",
                dSPSTT: "A",
                unitNumber: ''
            },
            'preplanData': {
                tabName: 'Planning',
                tabOption: 'Order Segment',
                radialValue: 'Tractor',
                tractorMultiplePreplanPageTitle: 'Tractor Multiple Preplan'
            },
            'dispatchData': {
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
                terminate_CustomerNo: "LGFO18",
                equipmentNo:'',
                chassisNo: ''
            }
        }
    }
}