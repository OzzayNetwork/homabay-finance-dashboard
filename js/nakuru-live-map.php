<section class="content main-map-container pt-68px pr-0 pl-270px vh-100 pl-md-0">
    <div class="ma-backdrop d-none"></div>
    <div class="map-asides">

            <!-- new map marker function  -->
            <aside class="map-info-cont animated slideInLeft left-100" id="newPoint">

            <!-- show this when loading the new data -->
            <div class="map-loader d-none">
                <div class="lds-ripple"><div></div><div></div></div>
            </div>
            <div class="map-cont-header">
                <h2 class="chat__title">New point of interest<small>Use this section to add a new point of interest on the map</small></h2>
                <i class="zmdi zmdi-close close-aside"></i>
            </div>

            

            <div class="map-cont-footer">
                

            </div>
            <div class="scrollbar-inner">

                

                <div class="listview">
                    <form class="">
                        <div class="listview__item ">
                            <div class="row">
                                <div class="col-12">
                                    <div class="selected-point-details p-3">
                                        <h6>Point Details</h6>

                                        <p class="mb-0"><strong>Sub County</strong></p>
                                        <p class="clicked-subcounty">Starehe</p>

                                        <p class="mb-0"><strong>Ward</strong></p>
                                        <p class="clicked-ward">Ward name</p>

                                        <p class="mb-0"><strong>Street</strong></p>
                                        <p class="clicked-street">Tom Mboya street</p>
                                    </div>
                                </div>

                                <div class="col-12">
                                <div class="form-group">
                                    <label for="locationCategory" class="mb-0"><strong>Select Point Category</strong></label>
                                    <p><small>Select the category for with this location belongs.</small></p>
                                    <select class="form-control" id="locationCategory">
                                        <option>-- Select location category --</option>
                                        <option value="plate">Advert Plate</option>
                                        <option>City Hall</option>
                                        <option>Revenue/service point</option>
                                        <option>Bus park</option>
                                    </select>
                                    </div>
                                </div>

                                

                                <div class="col-12">
                                <div class="form-group">
                                    <label class="mb-0" for="locationName"><strong>Location's Name</strong></label>
                                    <p> <small>Enter the name to the new location</small></p>
                                    <input type="text" class="form-control" id="locationName" placeholder="Point's Name" autofocus>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <div class="row new-plate d-none animated fade-in-down">
                                    <div class="col-sm-12 col-md-12">
                                        <div class="form-group">
                                            <label><strong>Advert Category</strong> <strong class="text-danger">*</strong></label>
                                                <select class="selectpicker form-control form-control form-control-lg validate flex-grow-1 show-tick" data-live-search="true">
                                                    <option data-tokens="select">-- Select Advert Category --</option>
                                                    <option data-tokens="option 1">option 1</option>
                                                    <option data-tokens="option 2">option 2</option>
                                                    <option data-tokens="option 3">option 3</option>
                                                    <option data-tokens="option 4">option 4</option>
                                                    
                                                </select>      
                                        </div>
                                    </div>

                                    <div class="col-sm-12 col-md-12">
                                        <div class="form-group">
                                                <label><strong>Advert type</strong> <strong class="text-danger">*</strong></label>
                                            <select class="selectpicker form-control form-control form-control-lg validate flex-grow-1 show-tick" data-live-search="true">
                                                <option data-tokens="select">-- Select Advert type --</option>
                                                <option data-tokens="option 1">option 1</option>
                                                <option data-tokens="option 2">option 2</option>
                                                <option data-tokens="option 3">option 3</option>
                                                <option data-tokens="option 4">option 4</option>
                                                </select>      
                                        </div>
                                    </div>

                                    <div class="col-sm-12 col-md-12">
                                        <div class="form-group">
                                            <label><strong>Number of Ad Faces</strong> <strong class="text-danger">*</strong></label>
                                            <input type="text" class="form-control"  placeholder="Enter No. of ad faces" required>
                                        </div>                                                    
                                    </div>

                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Plate Number</label>
                                                <input type="text" class="form-control" placeholder="Enter Plate No.">
                                            </div>
                                        </div>

                                        <div class="col-sm-12 col-md-12">
                                        <div class="form-group">
                                            <label class="mb-0">Advert space size<span class="text-danger">*</span></label>
                                            <p class="mb-2"><small>Remember to specify unit of measure</small></p>
                                            <div class="form-inline">
                                                <input type="text" placeholder="Width " class="form-control w-80px">                                                                           
                                                <input type="text" placeholder="Height" class="form-control w-80px">
                                                <select class="form-control ml-2 h-36">
                                                    <option>-- Units --</option>
                                                    <option>Inches</option>
                                                    <option>Mm</option>
                                                    <option>m</option>
                                                    <option>Cm</option>
                                                    <option>Km</option>
                                                    <option>Years</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="form-group">
                                            <label>Is this Advert type owned by the county?</label>
                                            <div class="form-inline">
                                                <div class="radio mt-0">
                                                    <input type="radio" name="plate-owner" value="yes" id="countyOwned" checked>
                                                    <label class="radio__label" checked for="countyOwned">Yes</label>
                                                </div>
                                                <div class="radio mt-0 ml-4">
                                                    <input type="radio" name="plate-owner" value="no" id="notCounty">
                                                    <label class="radio__label" for="notCounty">No</label>
                                                </div>
                                            </div>
                                        </div>
                                        </div>

                                        <div class="col-sm-12 col-md-12 owned-by-county animated fade-in-down">
                                        <div class="form-group">
                                            <label class="mb-0"><strong>Plot Number</strong> <strong class="text-danger"></strong></label>
                                            <p><small>Plot number not mandatory in ths case</small></p>
                                        <input type="text" class="form-control" placeholder="Enter plate number" required>
                                        </div>
                                    </div>
                                    <div class="col-12 plate-ownership-cont d-none animated fade-in-down">
                                        <div class="row">
                                            <div class="col-sm-12 col-md-12">
                                                <div class="form-group">
                                                    <label><strong>Plate Owner</strong> <strong class="text-danger">*</strong></label>
                                                <input type="text" class="form-control" placeholder="Enter plate number" required>
                                                </div>
                                            </div>

                                            <div class="col-sm-12 col-md-12 ">
                                                <div class="form-group">
                                                    <label><strong>Plot Number</strong> <strong class="text-danger">*</strong></label>
                                                <input type="text" class="form-control" placeholder="Enter plate number" required>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    </div>

                                

                                
                                </div>

                                

                                <div class="col-12">
                                    <button class="btn btn-primary btn--icon-text d-flex justify-content-center align-items-center text-white"><i class="zmdi zmdi-plus text-white"></i>Add Location</button>
                                </div>
                            </div>
                            
                        </div>

                        

                    </form>

                    
                </div>
                
            </div>
            
        </aside>

        

            <!-- map info content for service and revenue  -->
            <aside class="map-info-cont animated slideInLeft left-100" id="collectionPoint-info">

            <!-- show this when loading the new data -->
            <div class="map-loader d-none">
                <div class="lds-ripple"><div></div><div></div></div>
            </div>
            <div class="map-cont-header">
                <h2 class="chat__title">City Hall<small>Service/collection pont</small></h2>
                <i class="zmdi zmdi-close close-aside"></i>
            </div>
            <div class="map-cont-footer">
                

            </div>
            <div class="scroll-wrapper scrollbar-inner">

                <!-- incident image -->
                <div class="map-cont-img">
                    <img src="<?php echo base_url();?>images/billboard-ads/no-add.jpg">
                </div>

                <div class="listview">
                    <div class="listview__item ">
                        <div class="listview__content">
                            <div class="listview__heading text-uppercase font-weight-bold font-12px">Revenue collected today</div>
                            <h4 class="font-weight-bolder mb-0">KES 25,236,000</h4>
                        </div>
                    </div>

                    <div class="listview__item ">
                        <div class="listview__content">
                            <div class="listview__heading text-uppercase font-weight-bold font-12px">Clients Served</div>
                            <h4 class="font-weight-bolder mb-0">30</h4>
                        </div>
                    </div>
                </div>
                

                <div class="listview bg-primary">
                    <div class="listview__item py-2">
                        <div class="listview__heading text-white map-stat-header"><i class="ti-money"></i><span>Collection Summary</span></div>
                    </div>
                    
                </div>  
                <table class="table table-sm">
                    <thead>
                        <tr>
                            <td><strong>Service</strong></td>
                            <td><strong>Amount (kes)</strong></td>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td><strong>Seasonal</strong></td>
                            <td class="text-left text-wrap">
                                23,650,000
                            </td>
                        </tr>

                        <tr>
                            <td><strong>Daily parking</strong></td>
                            <td class="text-left text-wrap">
                                360,200
                            </td>
                        </tr>

                        <tr>
                            <td><strong>Penalties</strong></td>
                            <td class="text-left text-wrap">
                                360,200
                            </td>
                        </tr>

                        <tr>
                            <td><strong>Others</strong></td>
                            <td class="text-left text-wrap">
                                325,520
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
                

                
            </div>
            
        </aside>

            <!-- map info content for incident reporting -->
            <aside class="map-info-cont animated slideInLeft left-100" id="incident-info">

            <!-- show this when loading the new data -->
            <div class="map-loader d-none">
                <div class="lds-ripple"><div></div><div></div></div>
            </div>
            <div class="map-cont-header">
                <h2 class="chat__title">Incident title<small>30 Min Ago</small></h2>
                <i class="zmdi zmdi-close close-aside"></i>
            </div>
            <div class="map-cont-footer">
                

            </div>
            <div class="scroll-wrapper scrollbar-inner">

                <!-- incident image -->
                <div class="map-cont-img">
                    <img src="<?php echo base_url();?>demo/img/widgets/photo-1564993719576-7b00be6317cd.jpg">
                </div>
                

                <div class="listview bg-primary">
                    <div class="listview__item py-2">
                        <div class="listview__heading text-white map-stat-header"><i class="ti-alert"></i><span>Incident details</span></div>
                    </div>
                    
                </div>

                <div class="listview">
                        <div class="listview__item">
                            <div class="listview__content">
                                <div class="listview__heading">Reported By</div>
                                <p>Mr Kinothia Wanyoike</p>
                            </div>
                        </div>
                </div>

                <div class="listview">
                    <div class="listview__item">
                        <div class="listview__content">
                            <div class="listview__heading">Incident status</div>
                            <p>Pending</p>
                        </div>
                    </div>
            </div>

                
            </div>
            
        </aside>

        <!--advertisment plates -->
        <aside class="map-info-cont animated slideInLeft left-100" id="plate">

            <!-- show this when loading the new data -->
            <div class="map-loader d-none">
                <div class="lds-ripple"><div></div><div></div></div>
            </div>
            <div class="map-cont-header">
                <!-- plate number -->
                <h2 class="chat__title">
                    <!-- plate number -->
                    POTY67IU
                    <!-- advert type -->
                    <small>Billboard</small>
                </h2>
                <i class="zmdi zmdi-close close-aside"></i>
            </div>
            <div class=" scrollbar-inner">
                <div class="map-cont-footer">
                    <div class="map-cont-img">
                        <img class="plateImg" src="<?php echo base_url();?>images/non_compliant.jpeg">
                    </div>
    
                </div>
                <div class="listview bg-primary">
                    <div class="listview__item py-2">
                        <div class="listview__heading text-white map-stat-header"><i class="mdi mdi-office-building-marker-outline"></i><span>Plate's Location</span></div>
                    </div>
                    
                </div>
                <div class="listview">
                    <div class="listview__item py-2 px-2">                           
                        <div class="listview__content px-0">
                            <div class="listview__content px-3">
                                <!-- the clicked address -->
                                <div class="listview__heading"><strong>Address</strong></div>
                                <div class="listview__heading"><span class="plate-address">The clicked address</span></div>

                                <!-- The street -->
                                <div class="listview__heading"><strong>Street</strong></div>
                                <div class="listview__heading"><span class="plate-street">The clicked street</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="listview bg-primary">
                    <div class="listview__item py-2">
                        <div class="listview__heading text-white map-stat-header"><i class="mdi mdi-tray-full"></i><span>Renting details</span></div>
                    </div>
                </div>

                <div class="listview listview--hover">

                    <div href="#" class="listview__item py-2 px-2">
                        <div class="listview__content px-3">
                            <div class="listview__heading mb-2"><strong>39 of 60 days remaining</strong></div>

                            <div class="progress">
                                <div class="progress-bar progress-bar-danger" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>

                    <div class="listview__item py-2 px-2">

                        <div class="listview__content px-3">
                            <div class="listview__heading"><strong>Date rented</strong></div>
                            <p class="">April 23, 2020 10:25 PM</p>
                        </div>
                    </div>

                    <div class="listview__item py-2 px-2">

                        <div class="listview__content px-3">
                            <div class="listview__heading"><strong>Date Due</strong></div>
                            <p>Nov 1st, 2020 10:25 PM</p>
                        </div>
                    </div>

                    <div class="listview__item py-2 px-2">

                        <div class="listview__content px-3">
                            <div class="listview__heading"><strong>Duration Rented for</strong></div>
                            <p>21 days</p>
                        </div>
                    </div>

                    <div class="listview__item py-2 px-2">
                        <div class="listview__content px-3">
                            <div class="listview__heading"><strong>Amount Paid</strong></div>
                            <p>KES 2,520,320</p>
                        </div>
                    </div>

                    

                    <div class="listview__item py-2 px-2">
                        <div class="listview__content px-3">
                            <div class="listview__heading"><strong>Approved By</strong></div>
                            <p>Mr Enok Waswa</p>
                        </div>
                    </div>

                    
                </div>

                

                <div class="listview bg-primary">
                    <div class="listview__item py-2">
                        <div class="listview__heading text-white map-stat-header"><i class="mdi mdi-account-details"></i><span>Ad owner contact details</span></div>
                    </div>
                    
                </div>

                <div class="listview__item py-2 px-2">
                    <div class="listview__content px-3">
                        <div class="listview__heading"><strong>Rented to</strong></div>
                        <p>Nouveta LTD</p>
                    </div>
                </div>

                <div class="widget-profile__list text-black">
                    <div class="media">
                        <div class="avatar-char"><i class="zmdi zmdi-phone"></i></div>
                        <div class="media-body">
                            <strong><a href="tell:254704549859">0704549859</a></strong>
                            <small>Phone</small>
                        </div>
                    </div>

                    <div class="media">
                        <div class="avatar-char"><i class="zmdi zmdi-email"></i></div>
                        <div class="media-body">
                            <strong>m-hollaway@gmail.com</strong>
                            <small>Email</small>
                        </div>
                    </div>

                    
                </div>

                <table class="table table-sm d-none">
                    <tbody>
                        <tr>
                            <td><span>Assigned</span><span class="text-info">124</span></td>
                            <td><span>Active</span><span class="">124</span></td>
                        </tr>
                        <tr>
                            <td><span>Inactive</span><span class="text-danger">124</span></td>
                            <td><span>Damaged</span><span class="">124</span></td>
                        </tr>
                    </tbody>
                </table>
                

            </div>

            <div class="scrollbar-inner d-none plate-application-plate">
                <div class="listview bg-primary">
                    <div class="listview__item py-2">
                        <div class="listview__heading text-white map-stat-header"><i class="mdi mdi-tooltip-image"></i><span>Assign Plate</span></div>
                    </div>
                    
                </div>
                <div class="col-12 py-4">
                    <p>Enter the application number to which you would like to assign this plate's advertising plate to.</p>
                </div>
                <form>
                    <div class="col-12">
                        <div class="form-group">
                            <label><strong>Application number</strong></label>
                            <div class="form-inline d-flex">
                                <input type="text" class="form-control flex-grow-1 mr-2" placeholder="Enter number">
                                <button class="btn btn-primary btn--icon-text search-add"><i class="zmdi zmdi-search"></i>Search</button>
                            </div>
                        </div>
                    </div>

                    <!-- search results go here -->
                    <div class="col-12 p-0 d-none ad-results">

                        <!-- the artwork -->
                        <div class="map-cont-img">
                            <img class="plateImg" src="<?php echo base_url();?>images/billboard-ads/thankyou.jpg">
                        </div>

                        <div class="listview listview--hover">

                            <div href="#" class="listview__item py-2 px-2">
                                <div class="listview__content px-3">
                                    <div class="listview__heading mb-2"><strong>39 of 60 days remaining</strong></div>
        
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-danger" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="listview__item py-2 px-2">

                                <div class="listview__content px-3">
                                    <div class="listview__heading"><strong>Effective date</strong></div>
                                    <p class="">April 23, 2020 10:25 PM</p>
                                </div>
                            </div>

                            <div class="listview__item py-2 px-2">

                                <div class="listview__content px-3">
                                    <div class="listview__heading"><strong>Date Due</strong></div>
                                    <p>Nov 1st, 2020 10:25 PM</p>
                                </div>
                            </div>

                            <div class="listview__item py-2 px-2">

                                <div class="listview__content px-3">
                                    <div class="listview__heading"><strong>Duration Rented for</strong></div>
                                    <p>21 days</p>
                                </div>
                            </div>

                            <div class="listview__item py-2 px-2">
                                <div class="listview__content px-3">
                                    <div class="listview__heading"><strong>Amount Paid</strong></div>
                                    <p>KES 2,520,320</p>
                                </div>
                            </div>

                            

                            <div class="listview__item py-2 px-2">
                                <div class="listview__content px-3">
                                    <div class="listview__heading"><strong>Approved By</strong></div>
                                    <p>Mr Enok Waswa</p>
                                </div>
                            </div>

                            
                        </div>
                        <div class="row px-3">
                            <div class="col-12 pt-4 ">
                                <button class="btn btn-primary btn--icon-text btn-block"><i class="zmdi zmdi-check-all"></i>Assign</button>
                            </div>
                        </div>

                    </div>

                    <!-- show this section if results are not found or for some reson they cant be assigned to the plate -->

                    <div class="col-12 d-none">
                        <img class="plateImg" src="<?php echo base_url();?>images/billboard-ads/no-results.png">

                        <!-- search result status -->
                        <h6 class="text-center"><strong class="text-danger">No results found</strong></h6>

                        <!-- reason for status above -->
                        <p class="text-center">The application searched doesn't exist or its yet to be approved to be assigned this plate.</p>
                    </div>

                    
                </form>
            </div>
            
        </aside>

        <!-- multi faced plates -->
        <aside class="map-info-cont animated slideInLeft left-100" id="multi-plate">

            <!-- show this when loading the new data -->
            <div class="map-loader d-none">
                <div class="lds-ripple"><div></div><div></div></div>
            </div>
            <div class="map-cont-header">
                <!-- plate number -->
                <h2 class="chat__title">
                    <!-- plate number -->
                    POTY67IU
                    <!-- advert type -->
                    <small>City Clock <strong>4 Sided</strong></small>
                </h2>
                <i class="zmdi zmdi-close close-aside"></i>
            </div>
            <div class="listview bg-black">
                <div class="listview__item py-2">
                    <div class="listview__heading text-white map-stat-header d-flex justify-content-md-between w-100">
                        <span class="faces-counter-container">Side <span class="thePosition">1</span> of 4</span>

                        <div class="d-flex">
                            <button class="btn btn-sm btn-warning text-black btn--icon-text d-flex justify-content-center align-items-center ml-3 prev-side"><i class="zmdi zmdi-skip-previous ml-2 text-black"></i> Prev</button>                                        
                            <button class="btn btn-sm btn-warning text-black btn--icon-text d-flex justify-content-center align-items-center ml-3 next-side">Next <i class="zmdi zmdi-skip-next ml-2 text-black"></i></button>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="faces-container scrollbar-inner pb-3">
                <div class=" plate-slides pb-3">
                    <div class="map-cont-footer">
                        <div class="map-cont-img">
                            <img class="plateImg" src="<?php echo base_url();?>images/billboard-ads/water.jpg">
                        </div>
        
                    </div>
                    <div class="listview bg-primary">
                        <div class="listview__item py-2">
                            <div class="listview__heading text-white map-stat-header"><i class="mdi mdi-office-building-marker-outline"></i><span>Plate's Location</span></div>
                        </div>
                        
                    </div>
                    <div class="listview">
                        <div class="listview__item py-2 px-2">                           
                            <div class="listview__content px-0">
                                <div class="listview__content px-3">
                                    <!-- the clicked address -->
                                    <div class="listview__heading"><strong>Address</strong></div>
                                    <div class="listview__heading"><span class="plate-address">The clicked address</span></div>

                                    <!-- The street -->
                                    <div class="listview__heading"><strong>Street</strong></div>
                                    <div class="listview__heading"><span class="plate-street">The clicked street</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="listview bg-primary">
                        <div class="listview__item py-2">
                            <div class="listview__heading text-white map-stat-header"><i class="mdi mdi-tray-full"></i><span class="faces-counter-container">Side <span class="thePosition">3</span> Rental details</span></div>
                        </div>
                    </div>

                    <div class="listview listview--hover">

                        <div href="#" class="listview__item py-2 px-2">
                            <div class="listview__content px-3">
                                <div class="listview__heading mb-2"><strong>39 of 60 days remaining</strong></div>
    
                                <div class="progress">
                                    <div class="progress-bar progress-bar-danger" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>

                        <div class="listview__item py-2 px-2">

                            <div class="listview__content px-3">
                                <div class="listview__heading"><strong>Date rented</strong></div>
                                <p class="">April 23, 2020 10:25 PM</p>
                            </div>
                        </div>

                        <div class="listview__item py-2 px-2">

                            <div class="listview__content px-3">
                                <div class="listview__heading"><strong>Date Due</strong></div>
                                <p>Nov 1st, 2020 10:25 PM</p>
                            </div>
                        </div>

                        <div class="listview__item py-2 px-2">

                            <div class="listview__content px-3">
                                <div class="listview__heading"><strong>Duration Rented for</strong></div>
                                <p>21 days</p>
                            </div>
                        </div>

                        <div class="listview__item py-2 px-2">
                            <div class="listview__content px-3">
                                <div class="listview__heading"><strong>Amount Paid</strong></div>
                                <p>KES 2,520,320</p>
                            </div>
                        </div>

                        

                        <div class="listview__item py-2 px-2">
                            <div class="listview__content px-3">
                                <div class="listview__heading"><strong>Approved By</strong></div>
                                <p>Mr Enok Waswa</p>
                            </div>
                        </div>

                        
                    </div>
    
                    
    
                    <div class="listview bg-primary">
                        <div class="listview__item py-2">
                            <div class="listview__heading text-white map-stat-header"><i class="mdi mdi-account-details"></i><span>Ad owner contact details</span></div>
                        </div>
                        
                    </div>

                    <div class="listview__item py-2 px-2">
                        <div class="listview__content px-3">
                            <div class="listview__heading"><strong>Rented to</strong></div>
                            <p>Nouveta LTD</p>
                        </div>
                    </div>

                    <div class="widget-profile__list text-black">
                        <div class="media">
                            <div class="avatar-char"><i class="zmdi zmdi-phone"></i></div>
                            <div class="media-body">
                                <strong><a href="tell:254704549859">0704549859</a></strong>
                                <small>Phone</small>
                            </div>
                        </div>

                        <div class="media">
                            <div class="avatar-char"><i class="zmdi zmdi-email"></i></div>
                            <div class="media-body">
                                <strong>m-hollaway@gmail.com</strong>
                                <small>Email</small>
                            </div>
                        </div>

                        
                    </div>

                    <table class="table table-sm d-none">
                        <tbody>
                            <tr>
                                <td><span>Assigned</span><span class="text-info">124</span></td>
                                <td><span>Active</span><span class="">124</span></td>
                            </tr>
                            <tr>
                                <td><span>Inactive</span><span class="text-danger">124</span></td>
                                <td><span>Damaged</span><span class="">124</span></td>
                            </tr>
                        </tbody>
                    </table>
                    
    
                </div>
                <div class=" plate-slides d-none pb-3">
                    <div class="map-cont-footer">
                        <div class="map-cont-img">
                            <img class="plateImg" src="<?php echo base_url();?>images/billboard-ads/orange.jpg">
                        </div>
        
                    </div>
                    <div class="listview bg-primary">
                        <div class="listview__item py-2">
                            <div class="listview__heading text-white map-stat-header"><i class="mdi mdi-office-building-marker-outline"></i><span>Plate's Location</span></div>
                        </div>
                        
                    </div>
                    <div class="listview">
                        <div class="listview__item py-2 px-2">                           
                            <div class="listview__content px-0">
                                <div class="listview__content px-3">
                                    <!-- the clicked address -->
                                    <div class="listview__heading"><strong>Address</strong></div>
                                    <div class="listview__heading"><span class="plate-address">The clicked address</span></div>

                                    <!-- The street -->
                                    <div class="listview__heading"><strong>Street</strong></div>
                                    <div class="listview__heading"><span class="plate-street">The clicked street</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="listview bg-primary">
                        <div class="listview__item py-2">
                            <div class="listview__heading text-white map-stat-header"><i class="mdi mdi-tray-full"></i><span class="faces-counter-container">Side <span class="thePosition">3</span> Rental details</span></div>
                        </div>
                    </div>

                    <div class="listview listview--hover">

                        <div href="#" class="listview__item py-2 px-2">
                            <div class="listview__content px-3">
                                <div class="listview__heading mb-2"><strong>21 of 74 days remaining</strong></div>
    
                                <div class="progress">
                                    <div class="progress-bar progress-bar-danger" style="width: 5%" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>

                        <div class="listview__item py-2 px-2">

                            <div class="listview__content px-3">
                                <div class="listview__heading"><strong>Date rented</strong></div>
                                <p class="">April 23, 2020 10:25 PM</p>
                            </div>
                        </div>

                        <div class="listview__item py-2 px-2">

                            <div class="listview__content px-3">
                                <div class="listview__heading"><strong>Date Due</strong></div>
                                <p>Dec 25, 2020 10:25 PM</p>
                            </div>
                        </div>

                        <div class="listview__item py-2 px-2">

                            <div class="listview__content px-3">
                                <div class="listview__heading"><strong>Duration Rented for</strong></div>
                                <p>74 days</p>
                            </div>
                        </div>

                        <div class="listview__item py-2 px-2">
                            <div class="listview__content px-3">
                                <div class="listview__heading"><strong>Amount Paid</strong></div>
                                <p>KES 2,520,320</p>
                            </div>
                        </div>

                        

                        <div class="listview__item py-2 px-2">
                            <div class="listview__content px-3">
                                <div class="listview__heading"><strong>Approved By</strong></div>
                                <p>Mr Enok Waswa</p>
                            </div>
                        </div>

                        
                    </div>
    
                    
    
                    <div class="listview bg-primary">
                        <div class="listview__item py-2">
                            <div class="listview__heading text-white map-stat-header"><i class="mdi mdi-account-details"></i><span>Ad owner contact details</span></div>
                        </div>
                        
                    </div>

                    <div class="listview__item py-2 px-2">
                        <div class="listview__content px-3">
                            <div class="listview__heading"><strong>Rented to</strong></div>
                            <p>The Orange Company</p>
                        </div>
                    </div>

                    <div class="widget-profile__list text-black">
                        <div class="media">
                            <div class="avatar-char"><i class="zmdi zmdi-phone"></i></div>
                            <div class="media-body">
                                <strong><a href="tell:254704549859">0704549859</a></strong>
                                <small>Phone</small>
                            </div>
                        </div>

                        <div class="media">
                            <div class="avatar-char"><i class="zmdi zmdi-email"></i></div>
                            <div class="media-body">
                                <strong>m-hollaway@gmail.com</strong>
                                <small>Email</small>
                            </div>
                        </div>

                        
                    </div>

                    <table class="table table-sm d-none">
                        <tbody>
                            <tr>
                                <td><span>Assigned</span><span class="text-info">124</span></td>
                                <td><span>Active</span><span class="">124</span></td>
                            </tr>
                            <tr>
                                <td><span>Inactive</span><span class="text-danger">124</span></td>
                                <td><span>Damaged</span><span class="">124</span></td>
                            </tr>
                        </tbody>
                    </table>
                    
    
                </div>
                <div class=" plate-slides d-none pb-3">
                    <div class="map-cont-footer">
                        <div class="map-cont-img">
                            <img class="plateImg" src="<?php echo base_url();?>images/billboard-ads/nature.jpg">
                        </div>
        
                    </div>
                    <div class="listview bg-primary">
                        <div class="listview__item py-2">
                            <div class="listview__heading text-white map-stat-header"><i class="mdi mdi-office-building-marker-outline"></i><span>Plate's Location</span></div>
                        </div>
                        
                    </div>
                    <div class="listview">
                        <div class="listview__item py-2 px-2">                           
                            <div class="listview__content px-0">
                                <div class="listview__content px-3">
                                    <!-- the clicked address -->
                                    <div class="listview__heading"><strong>Address</strong></div>
                                    <div class="listview__heading"><span class="plate-address">The clicked address</span></div>

                                    <!-- The street -->
                                    <div class="listview__heading"><strong>Street</strong></div>
                                    <div class="listview__heading"><span class="plate-street">The clicked street</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="listview bg-primary">
                        <div class="listview__item py-2">
                            <div class="listview__heading text-white map-stat-header"><i class="mdi mdi-tray-full"></i><span class="faces-counter-container">Side <span class="thePosition">3</span> Rental details</span></div>
                        </div>
                    </div>

                    <div class="listview listview--hover">

                        <div href="#" class="listview__item py-2 px-2">
                            <div class="listview__content px-3">
                                <div class="listview__heading mb-2"><strong>40 of 55 days remaining</strong></div>
    
                                <div class="progress">
                                    <div class="progress-bar progress-bar-danger" style="width: 95%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>

                        <div class="listview__item py-2 px-2">

                            <div class="listview__content px-3">
                                <div class="listview__heading"><strong>Date rented</strong></div>
                                <p class="">Augus 13, 2020 10:25 PM</p>
                            </div>
                        </div>

                        <div class="listview__item py-2 px-2">

                            <div class="listview__content px-3">
                                <div class="listview__heading"><strong>Date Due</strong></div>
                                <p>Nov 1st, 2020 10:25 PM</p>
                            </div>
                        </div>

                        <div class="listview__item py-2 px-2">

                            <div class="listview__content px-3">
                                <div class="listview__heading"><strong>Duration Rented for</strong></div>
                                <p>21 days</p>
                            </div>
                        </div>

                        <div class="listview__item py-2 px-2">
                            <div class="listview__content px-3">
                                <div class="listview__heading"><strong>Amount Paid</strong></div>
                                <p>KES 2,520,320</p>
                            </div>
                        </div>

                        

                        <div class="listview__item py-2 px-2">
                            <div class="listview__content px-3">
                                <div class="listview__heading"><strong>Approved By</strong></div>
                                <p>Mr Enok Waswa</p>
                            </div>
                        </div>

                        
                    </div>
    
                    
    
                    <div class="listview bg-primary">
                        <div class="listview__item py-2">
                            <div class="listview__heading text-white map-stat-header"><i class="mdi mdi-account-details"></i><span>Ad owner contact details</span></div>
                        </div>
                        
                    </div>

                    <div class="listview__item py-2 px-2">
                        <div class="listview__content px-3">
                            <div class="listview__heading"><strong>Rented to</strong></div>
                            <p>Nouveta LTD</p>
                        </div>
                    </div>

                    <div class="widget-profile__list text-black">
                        <div class="media">
                            <div class="avatar-char"><i class="zmdi zmdi-phone"></i></div>
                            <div class="media-body">
                                <strong><a href="tell:254704549859">0704549859</a></strong>
                                <small>Phone</small>
                            </div>
                        </div>

                        <div class="media">
                            <div class="avatar-char"><i class="zmdi zmdi-email"></i></div>
                            <div class="media-body">
                                <strong>m-hollaway@gmail.com</strong>
                                <small>Email</small>
                            </div>
                        </div>

                        
                    </div>

                    <table class="table table-sm d-none">
                        <tbody>
                            <tr>
                                <td><span>Assigned</span><span class="text-info">124</span></td>
                                <td><span>Active</span><span class="">124</span></td>
                            </tr>
                            <tr>
                                <td><span>Inactive</span><span class="text-danger">124</span></td>
                                <td><span>Damaged</span><span class="">124</span></td>
                            </tr>
                        </tbody>
                    </table>
                    
    
                </div>
                <div class=" plate-slides d-none pb-3"> 
                        <div class="map-cont-img">
                            <img src="<?php echo base_url();?>images/billboard-ads/no-add.jpg">
                        </div>
                        <div class="listview bg-primary">
                            <div class="listview__item py-2">
                                <div class="listview__heading text-white map-stat-header"><i class="mdi mdi-tooltip-image"></i><span>Assign Face</span></div>
                            </div>
                            
                        </div>
                        <div class="col-12 py-4">
                            <p>Enter the application number to which you would like to assign this plate's advertising plate to.</p>
                        </div>
                        <form>
                            <div class="col-12">
                                <div class="form-group">
                                    <label><strong>Application number</strong></label>
                                    <div class="form-inline d-flex">
                                        <input type="text" class="form-control flex-grow-1 mr-2" placeholder="Enter number">
                                        <button class="btn btn-primary btn--icon-text search-add"><i class="zmdi zmdi-search"></i>Search</button>
                                    </div>
                                </div>
                            </div>

                            <!-- search results go here -->
                            <div class="col-12 p-0 d-none ad-results">

                                <!-- the artwork -->
                                <div class="map-cont-img">
                                    <img class="plateImg" src="<?php echo base_url();?>images/billboard-ads/thankyou.jpg">
                                </div>

                                <div class="listview listview--hover">

                                    <div href="#" class="listview__item py-2 px-2">
                                        <div class="listview__content px-3">
                                            <div class="listview__heading mb-2"><strong>39 of 60 days remaining</strong></div>
                
                                            <div class="progress">
                                                <div class="progress-bar progress-bar-danger" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div class="listview__item py-2 px-2">
        
                                        <div class="listview__content px-3">
                                            <div class="listview__heading"><strong>Effective date</strong></div>
                                            <p class="">April 23, 2020 10:25 PM</p>
                                        </div>
                                    </div>
    
                                    <div class="listview__item py-2 px-2">
        
                                        <div class="listview__content px-3">
                                            <div class="listview__heading"><strong>Date Due</strong></div>
                                            <p>Nov 1st, 2020 10:25 PM</p>
                                        </div>
                                    </div>
    
                                    <div class="listview__item py-2 px-2">
        
                                        <div class="listview__content px-3">
                                            <div class="listview__heading"><strong>Duration Rented for</strong></div>
                                            <p>21 days</p>
                                        </div>
                                    </div>
        
                                    <div class="listview__item py-2 px-2">
                                        <div class="listview__content px-3">
                                            <div class="listview__heading"><strong>Amount Paid</strong></div>
                                            <p>KES 2,520,320</p>
                                        </div>
                                    </div>
        
                                    
        
                                    <div class="listview__item py-2 px-2">
                                        <div class="listview__content px-3">
                                            <div class="listview__heading"><strong>Approved By</strong></div>
                                            <p>Mr Enok Waswa</p>
                                        </div>
                                    </div>
        
                                    
                                </div>
                                <div class="row px-3">
                                    <div class="col-12 pt-4 ">
                                        <button class="btn btn-primary btn--icon-text btn-block"><i class="zmdi zmdi-check-all"></i>Assign</button>
                                    </div>
                                </div>

                            </div>

                            <!-- show this section if results are not found or for some reson they cant be assigned to the plate -->

                            <div class="col-12 d-none">
                                <img class="plateImg" src="<?php echo base_url();?>images/billboard-ads/no-results.png">

                                <!-- search result status -->
                                <h6 class="text-center"><strong class="text-danger">No results found</strong></h6>

                                <!-- reason for status above -->
                                <p class="text-center">The application searched doesn't exist or its yet to be approved to be assigned this plate.</p>
                            </div>

                            
                        </form>
                    
    
                </div>
            </div>
            
        </aside>

        <!-- signage applications -->
        <aside class="map-info-cont animated slideInLeft left-100" id="application">

            <!-- show this when loading the new data -->
            <div class="map-loader d-none">
                <div class="lds-ripple"><div></div><div></div></div>
            </div>
            <div class="map-cont-header">

                <!-- application title -->
                <h2 class="chat__title">Signage Application
                    <p class="mt-2"><small class="d-flex align-items-center mr-1"><span class="active-agent mr-1"></span>Approved</small></p>                            
                </h2>
                <i class="zmdi zmdi-close close-aside"></i>
            </div>
            
            <div class=" scrollbar-inner">
                <div class="map-cont-footer">
                    <div class="map-cont-img">
                        <img class="plateImg" src="<?php echo base_url();?>images/non_compliant.jpeg">
                    </div>
    
                </div>
                <div class="listview bg-primary">
                    <div class="listview__item py-2">
                        <div class="listview__heading text-white map-stat-header"><i class="mdi mdi-office-building-marker-outline"></i><span>Location</span></div>
                    </div>
                    
                </div>
                <div class="listview">
                    <div class="listview__item py-2 px-2">                           
                        <div class="listview__content px-3">
                            <!-- the clicked address -->
                            <div class="listview__heading"><strong>Address</strong></div>
                            <div class="listview__heading"><span class="plate-address">The clicked address</span></div>

                            <!-- The street -->
                            <div class="listview__heading"><strong>Street</strong></div>
                            <div class="listview__heading"><span class="plate-street">The clicked street</span></div>
                        </div>
                    </div>
                </div>
                <div class="listview bg-primary">
                    <div class="listview__item py-2">
                        <div class="listview__heading text-white map-stat-header"><i class="mdi mdi-tray-full"></i><span>Ad details</span></div>
                    </div>
                </div>

                <div class="listview listview--hover">

                    <div href="#" class="listview__item py-2 px-2">
                        <div class="listview__content px-3">
                            <div class="listview__heading mb-2"><strong>39 of 60 days remaining</strong></div>

                            <div class="progress">
                                <div class="progress-bar progress-bar-danger" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>

                    <div class="listview__item py-2 px-2">

                        <div class="listview__content px-3">
                            <div class="listview__heading"><strong>Date approved</strong></div>
                            <p class="">April 23, 2020 10:25 PM</p>
                        </div>
                    </div>

                    <div class="listview__item py-2 px-2">

                        <div class="listview__content px-3">
                            <div class="listview__heading"><strong>Date Due</strong></div>
                            <p>Nov 1st, 2020 10:25 PM</p>
                        </div>
                    </div>

                    <div class="listview__item py-2 px-2">

                        <div class="listview__content px-3">
                            <div class="listview__heading"><strong>Ad duration</strong></div>
                            <p>21 days</p>
                        </div>
                    </div>

                    <div class="listview__item py-2 px-2">
                        <div class="listview__content px-3">
                            <div class="listview__heading"><strong>Amount Paid</strong></div>
                            <p>KES 2,520,320</p>
                        </div>
                    </div>

                    

                    <div class="listview__item py-2 px-2">
                        <div class="listview__content px-3">
                            <div class="listview__heading"><strong>Approved By</strong></div>
                            <p>Mr Enok Waswa</p>
                        </div>
                    </div>

                    
                </div>

                

                <div class="listview bg-primary">
                    <div class="listview__item py-2">
                        <div class="listview__heading text-white map-stat-header"><i class="mdi mdi-account-details"></i><span>Ad owner contact details</span></div>
                    </div>
                    
                </div>

                <div class="listview__item py-2 px-2">
                    <div class="listview__content px-3">
                        <div class="listview__heading"><strong>Rented to</strong></div>
                        <p>Nouveta LTD</p>
                    </div>
                </div>

                <div class="widget-profile__list text-black">
                    <div class="media">
                        <div class="avatar-char"><i class="zmdi zmdi-phone"></i></div>
                        <div class="media-body">
                            <strong><a href="tell:254704549859">0704549859</a></strong>
                            <small>Phone</small>
                        </div>
                    </div>

                    <div class="media">
                        <div class="avatar-char"><i class="zmdi zmdi-email"></i></div>
                        <div class="media-body">
                            <strong>m-hollaway@gmail.com</strong>
                            <small>Email</small>
                        </div>
                    </div>

                    
                </div>

                <table class="table table-sm d-none">
                    <tbody>
                        <tr>
                            <td><span>Assigned</span><span class="text-info">124</span></td>
                            <td><span>Active</span><span class="">124</span></td>
                        </tr>
                        <tr>
                            <td><span>Inactive</span><span class="text-danger">124</span></td>
                            <td><span>Damaged</span><span class="">124</span></td>
                        </tr>
                    </tbody>
                </table>
                

            </div>
            
        </aside>

        <!-- approved signage application -->
        <aside class="map-info-cont animated slideInLeft left-100" id="approved">

            <!-- show this when loading the new data -->
            <div class="map-loader d-none">
                <div class="lds-ripple"><div></div><div></div></div>
            </div>
            <div class="map-cont-header">
                <h2 class="chat__title">Approved Signage
                    <p class="mt-2"><small class="d-flex align-items-center mr-1"><span class="active-agent mr-1"></span>Approved</small></p>     
                </h2>
                <i class="zmdi zmdi-close close-aside"></i>
            </div>
            
            <div class=" scrollbar-inner">
                <div class="map-cont-footer">
                    <div class="map-cont-img">
                        <img class="plateImg" src="<?php echo base_url();?>images/non_compliant.jpeg">
                    </div>
    
                </div>
                <div class="listview bg-primary">
                    <div class="listview__item py-2">
                        <div class="listview__heading text-white map-stat-header"><i class="mdi mdi-office-building-marker-outline"></i><span>Location</span></div>
                    </div>
                    
                </div>
                <div class="listview">
                    <div class="listview__item py-2 px-2">                           
                        <div class="listview__content px-3">
                            <!-- the clicked address -->
                            <div class="listview__heading"><strong>Address</strong></div>
                            <div class="listview__heading"><span class="plate-address">The clicked address</span></div>

                            <!-- The street -->
                            <div class="listview__heading"><strong>Street</strong></div>
                            <div class="listview__heading"><span class="plate-street">The clicked street</span></div>
                        </div>
                    </div>
                </div>
                <div class="listview bg-primary">
                    <div class="listview__item py-2">
                        <div class="listview__heading text-white map-stat-header"><i class="mdi mdi-tray-full"></i><span>Ad details</span></div>
                    </div>
                </div>

                <div class="listview listview--hover">

                    <div href="#" class="listview__item py-2 px-2">
                        <div class="listview__content px-3">
                            <div class="listview__heading mb-2"><strong>39 of 60 days remaining</strong></div>

                            <div class="progress">
                                <div class="progress-bar progress-bar-danger" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>

                    <div class="listview__item py-2 px-2">

                        <div class="listview__content px-3">
                            <div class="listview__heading"><strong>Date approved</strong></div>
                            <p class="">April 23, 2020 10:25 PM</p>
                        </div>
                    </div>

                    <div class="listview__item py-2 px-2">

                        <div class="listview__content px-3">
                            <div class="listview__heading"><strong>Date Due</strong></div>
                            <p>Nov 1st, 2020 10:25 PM</p>
                        </div>
                    </div>

                    <div class="listview__item py-2 px-2">

                        <div class="listview__content px-3">
                            <div class="listview__heading"><strong>Ad duration</strong></div>
                            <p>21 days</p>
                        </div>
                    </div>

                    <div class="listview__item py-2 px-2">
                        <div class="listview__content px-3">
                            <div class="listview__heading"><strong>Amount Paid</strong></div>
                            <p>KES 2,520,320</p>
                        </div>
                    </div>

                    

                    <div class="listview__item py-2 px-2">
                        <div class="listview__content px-3">
                            <div class="listview__heading"><strong>Approved By</strong></div>
                            <p>Mr Enok Waswa</p>
                        </div>
                    </div>

                    
                </div>

                

                <div class="listview bg-primary">
                    <div class="listview__item py-2">
                        <div class="listview__heading text-white map-stat-header"><i class="mdi mdi-account-details"></i><span>Ad owner contact details</span></div>
                    </div>
                    
                </div>

                <div class="listview__item py-2 px-2">
                    <div class="listview__content px-3">
                        <div class="listview__heading"><strong>Rented to</strong></div>
                        <p>Nouveta LTD</p>
                    </div>
                </div>

                <div class="widget-profile__list text-black">
                    <div class="media">
                        <div class="avatar-char"><i class="zmdi zmdi-phone"></i></div>
                        <div class="media-body">
                            <strong><a href="tell:254704549859">0704549859</a></strong>
                            <small>Phone</small>
                        </div>
                    </div>

                    <div class="media">
                        <div class="avatar-char"><i class="zmdi zmdi-email"></i></div>
                        <div class="media-body">
                            <strong>m-hollaway@gmail.com</strong>
                            <small>Email</small>
                        </div>
                    </div>

                    
                </div>

                <table class="table table-sm d-none">
                    <tbody>
                        <tr>
                            <td><span>Assigned</span><span class="text-info">124</span></td>
                            <td><span>Active</span><span class="">124</span></td>
                        </tr>
                        <tr>
                            <td><span>Inactive</span><span class="text-danger">124</span></td>
                            <td><span>Damaged</span><span class="">124</span></td>
                        </tr>
                    </tbody>
                </table>
                

            </div>
            
        </aside>

        <!-- map info content for agents -->
        <aside class="map-info-cont animated slideInLeft left-100" id="agents-info">

            <!-- show this when loading the new data -->
            <div class="map-loader d-none">
                <div class="lds-ripple"><div></div><div></div></div>
            </div>
            <div class="map-cont-header">

                <!-- //use class name active-agent for an active agent -->
                <h2 class="chat__title">
                    <span class="d-flex align-items-center"><span class="offline-agent mr-3"></span>Alex Wanjala Wafula</span>
                    <small>Man Number goes here</small>
                </h2>
                <i class="zmdi zmdi-close close-aside"></i>
            </div>
            
            <div class="scroll-wrapper scrollbar-inner">
                <div class="map-cont-footer">
                    <div class="map-cont-img">

                        <!-- his picture goes here if any -->
                        <img src="<?php echo base_url();?>images/non_compliant.jpeg">
                    </div>
    
                </div>
                
                <div href="#" class="listview__item">
                    <div class="listview__content">
                        <div class="listview__heading mb-2"><strong>25MB of 1GB remaining</strong></div>

                        <div class="progress">
                            <div class="progress-bar progress-bar-danger" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>

                <div class="listview bg-primary">
                    <div class="listview__item py-2">
                        <div class="listview__heading text-white map-stat-header"><i class="flaticon-smartphone"></i><span>Enforcement Summary</span></div>
                    </div>
                    
                </div>

                <div class="listview">
                    <div class="listview__item py-2">
                        <div class="row w-100">

                            <div class="col-5">
                                <div class="listview__heading text-uppercase font-weight-bold font-10px">queries</div>
                                <h4 class="font-weight-bolder">102</h4>
                            </div>
                            <div class="col-7">
                                <div class="listview__heading text-uppercase font-weight-bold font-10px">Clamped</div>
                                <h4 class="font-weight-bolder">22</h4>
                            </div>

                            <div class="col-5 pb-2">
                                <div class="listview__heading text-uppercase font-weight-bold font-10px">Unclamped</div>
                                <h4 class="font-weight-bolder">125</h4>
                            </div>
                            <div class="col-7 pb-2">
                                <div class="listview__heading text-uppercase font-weight-bold font-10px">Distance covered</div>
                                <h4 class="font-weight-bolder">22 m</h4>
                            </div>

                            
                        </div>
                        
                    </div>
                    
                </div>

                <div class="listview bg-primary">
                    <div class="listview__item py-2">
                        <div class="listview__heading text-white map-stat-header"><span>Contact information</span></div>
                    </div>
                    
                </div>
                <div class="widget-profile__list text-black">
                    <div class="media">
                        <div class="avatar-char"><i class="zmdi zmdi-phone"></i></div>
                        <div class="media-body">
                            <strong><a href="tell:254704549859">0704549859</a></strong>
                            <small>Phone</small>
                        </div>
                    </div>

                    <div class="media">
                        <div class="avatar-char"><i class="zmdi zmdi-email"></i></div>
                        <div class="media-body">
                            <strong>m-hollaway@gmail.com</strong>
                            <small>Email</small>
                        </div>
                    </div>

                    
                </div>
                
                

            </div>
            
        </aside>

        <!-- map info content for street parking -->
        <aside class="map-info-cont animated slideInLeft left-100" id="street-info">

            <!-- show this when loading the new data -->
            <div class="map-loader d-none">
                <div class="lds-ripple"><div></div><div></div></div>
            </div>
            <div class="map-cont-header">
                <h2 class="chat__title">Tom Mboya street <small>Daily Parking</small></h2>
                <i class="zmdi zmdi-close close-aside"></i>
            </div>
            
            <div class="scroll-wrapper scrollbar-inner">

                <!-- street image if any -->
                <div class="map-cont-img">
                    <img src="<?php echo base_url();?>images/non_compliant.jpeg">
                </div>
                <div class="listview">
                    <div class="listview__item ">
                        <div class="listview__content">
                            <div class="listview__heading text-uppercase font-weight-bold font-12px">Revenue collected today</div>
                            <h4 class="font-weight-bolder mb-0">KES 25,236,000</h4>
                        </div>
                    </div>
                </div>

                <div class="listview bg-primary">
                    <div class="listview__item py-2">
                        <div class="listview__heading text-white map-stat-header"><i class="flaticon-car-1"></i><span>Parking slots summary</span></div>
                    </div>
                    
                </div>

                <div class="listview">
                    <div class="listview__item py-2">
                        <div class="row w-100">

                            <div class="col-6">
                                <div class="listview__heading text-uppercase font-weight-bold font-10px">Total slots</div>
                                <h4 class="font-weight-bolder">102</h4>
                            </div>
                            <div class="col-6">
                                <div class="listview__heading text-uppercase font-weight-bold font-10px">Occupied</div>
                                <h4 class="font-weight-bolder">22</h4>
                            </div>

                            <div class="col-6 pb-2">
                                <div class="listview__heading text-uppercase font-weight-bold font-10px">Available</div>
                                <h4 class="font-weight-bolder">125</h4>
                            </div>
                            <div class="col-6 pb-2">
                                <div class="listview__heading text-uppercase font-weight-bold font-10px">cars checked in</div>
                                <h4 class="font-weight-bolder">132</h4>
                            </div>

                            
                        </div>
                        
                    </div>
                    
                </div>

                <div class="listview bg-primary">
                    <div class="listview__item py-2">
                        <div class="listview__heading text-white map-stat-header"><i class="flaticon-smartphone"></i><span>Enforcement summary</span></div>
                    </div>
                    
                </div>
                <table class="table table-sm">
                    <tbody>
                        <tr>
                            <td><span>Queries</span><span class="text-info">1124</span></td>
                            <td><span>Not queried</span><span class="">124</span></td>
                        </tr>

                        <tr>
                            <td><span>Compliant</span><span class="text-danger">124</span></td>
                            <td><span>Uncompliant</span><span class="">124</span></td>
                        </tr>

                        <tr>
                            <td><span>Clamped</span><span class="text-danger">124</span></td>
                            <td><span>Due clamping</span><span class="">124</span></td>
                        </tr>
                        <tr>
                            <td><span>To be unclamped</span><span class="text-danger">124</span></td>
                            <td><span>to be toed</span><span class="">124</span></td>
                        </tr>
                    </tbody>
                </table>
                

            </div>

            <div class="map-cont-footer">
            </div>
        </aside>

            <!-- vehicle details -->
            <aside class="map-info-cont animated slideInLeft left-100" id="car-info">

            <!-- show this when loading the new data -->
            <div class="map-loader d-none">
                <div class="lds-ripple"><div></div><div></div></div>
            </div>
            <div class="map-cont-header">
                <h2 class="chat__title">KAD 567Y <small>Car category</small></h2>
                <i class="zmdi zmdi-close close-aside"></i>
            </div>
            
            <div class="scroll-wrapper scrollbar-inner">

                <!-- street image if any -->
                <div class="map-cont-img">
                    <img src="<?php echo base_url();?>images/non_compliant.jpeg">
                </div>
                <div class="listview">
                    <div class="listview__item ">
                        <div class="listview__content">
                            <div class="listview__heading text-uppercase font-weight-bold font-12px">Total amount paid</div>
                            <h4 class="font-weight-bolder mb-0">KES 200</h4>
                        </div>
                    </div>
                </div>

                <div class="listview bg-primary">
                    <div class="listview__item py-2">
                        <div class="listview__heading text-white map-stat-header"><i class="flaticon-car-1"></i><span>Current parking status</span></div>
                    </div>
                    
                </div>

                <div class="listview">
                    <div class="listview__item py-2">                           
                        <strong class="text-success">Compliant</strong>
                    </div>
                    
                </div>

                <div class="listview bg-primary">
                    <div class="listview__item py-2">
                        <div class="listview__heading text-white map-stat-header"><i class="flaticon-smartphone"></i><span>Parking statuses timelines</span></div>
                    </div>
                    
                </div>
                <table class="table table-sm">
                    <thead>
                        <tr>
                            <td><strong>Time:</strong></td>
                            <td><strong>Details</strong></td>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td><strong>8:00 AM</strong></td>
                            <td class="text-left text-wrap">
                                The vehicle was queried and was found to be non compliant
                            </td>
                        </tr>

                        <tr>
                            <td><strong>8:45 AM</strong></td>
                            <td class="text-left text-wrap">
                                The vehicle was clamped by Mr Miheso
                            </td>
                        </tr>

                        <tr>
                            <td><strong>9:00 AM</strong></td>
                            <td class="text-left text-wrap">
                                The owner paid for the parking penalty
                            </td>
                        </tr>
                        <tr>
                            <td><strong>9:02 AM</strong></td>
                            <td class="text-left text-wrap">
                                The car was unclaped by Ms Jane.
                            </td>
                        </tr>
                    </tbody>
                </table>
                

            </div>

            <div class="map-cont-footer">
            </div>
        </aside>
    </div>

    <div class="">
        <div class="position-relative">
            <div id="map" class="w-100 mt-1 h-100 live-map-cont"></div>

            <!-- map serach input box -->
            <div class="form-group map-searcher">

                <input type="text" class="form-control form-control-lg text-black"   placeholder="Search for a location" id="pac-input">
                <button title="Clear search results" class="btn btn-transparent border-0 clear-map"><i class="zmdi zmdi-close d-none"></i></button>
                </div>

            <!-- key button -->
            <div class="map-key-card card">
                <div class="card-body">
                    <i class="mdi mdi-key-variant"></i>
                </div>
            </div>

            <!-- key items -->
            <div class="card map-card animated slideInLeft">
                <span class="close-map-key"><i class="zmdi zmdi-close"></i></span>
                <div class="card-body">
                    <h4 class="card-title">Map Key</h4>
                    
                </div>
                <div class="listview py-4 map-key">
                    <span class="listview__item py-0">
                        <img src="<?php echo base_url();?>images/map-assets/damaged.svg" class="listview__img" alt="">
    
                        <div class="listview__content d-flex align-items-center">
                            <div class="listview__heading"><strong>Damaged Plots</strong></div>                        
                        </div>
                    </span>
    
                    <span class="listview__item py-0">
                        <img src="<?php echo base_url();?>images/map-assets/available.svg" class="listview__img" alt="">
    
                        <div class="listview__content d-flex align-items-center">
                            <div class="listview__heading"><strong>Available Plots</strong></div>                        
                        </div>
                    </span>
    
                    <span class="listview__item py-0">
                        <img src="<?php echo base_url();?>images/map-assets/rented.svg" class="listview__img" alt="">
    
                        <div class="listview__content d-flex align-items-center">
                            <div class="listview__heading"><strong>Rented Plots</strong></div>                        
                        </div>
                    </span> 
                    
                    <span class="listview__item py-0">
                        <img src="<?php echo base_url();?>images/map-assets/multiple-plates.svg" class="listview__img" alt="">
    
                        <div class="listview__content d-flex align-items-center">
                            <div class="listview__heading"><strong>Multiple sided Plots</strong></div>                        
                        </div>
                    </span>  
                    
                    
                    <span class="listview__item py-0">
                        <img src="<?php echo base_url();?>images/map-assets/rejected.svg" class="listview__img" alt="">
    
                        <div class="listview__content d-flex align-items-center">
                            <div class="listview__heading"><strong>Rejected Applications</strong></div>                        
                        </div>
                    </span>  
                    
                    <span class="listview__item py-0">
                        <img src="<?php echo base_url();?>images/map-assets/pending.svg" class="listview__img" alt="">
    
                        <div class="listview__content d-flex align-items-center">
                            <div class="listview__heading"><strong>Pending applications</strong></div>                        
                        </div>
                    </span>

                    <span class="listview__item py-0">
                        <img src="<?php echo base_url();?>images/map-assets/approved.svg" class="listview__img" alt="">
    
                        <div class="listview__content d-flex align-items-center">
                            <div class="listview__heading"><strong>Approved Applications</strong></div>                        
                        </div>
                    </span>
                    
    
                    <span class="listview__item py-0">
                        <img src="<?php echo base_url();?>images/map-assets/warning.svg" class="listview__img" alt="">
    
                        <div class="listview__content d-flex align-items-center">
                            <div class="listview__heading"><strong>Incidents</strong></div>                        
                        </div>
                    </span>
    
                    <span class="listview__item py-0">
                        <img src="<?php echo base_url();?>images/map-assets/active-agent.svg" class="listview__img" alt="">
    
                        <div class="listview__content d-flex align-items-center">
                            <div class="listview__heading"><strong>active-agent</strong></div>                        
                        </div>
                    </span>
    
                    <span class="listview__item py-0">
                        <img src="<?php echo base_url();?>images/map-assets/inactive-agent.svg" class="listview__img" alt="">
    
                        <div class="listview__content d-flex align-items-center">
                            <div class="listview__heading"><strong>Inactive agents</strong></div>                        
                        </div>
                    </span>
    
                    <span class="listview__item py-0">
                        <img src="<?php echo base_url();?>images/map-assets/parliament.svg" class="listview__img" alt="">
    
                        <div class="listview__content d-flex align-items-center">
                            <div class="listview__heading"><strong>City Hall</strong></div>                        
                        </div>
                    </span>
    
                    
                    <span class="listview__item py-0">
                        <img src="<?php echo base_url();?>images/map-assets/flag.svg" class="listview__img" alt="">
    
                        <div class="listview__content d-flex align-items-center">
                            <div class="listview__heading"><strong>Service/Collection Point</strong></div>                        
                        </div>
                    </span>
    
                    
    
                </div>
            </div>
        
        </div>
    
    </div>
