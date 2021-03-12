//import * as React  'react';
import React, { Component } from 'react';
import { TouchableOpacity,ActivityIndicator,View,Text,FlatList,StyleSheet,SafeAreaView,Image, Touchable } from 'react-native';

export default class ListPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
          list:[],
          loading:true
                 }
    }
    componentDidMount() {
        this.getList()
       
    }


   getList=async()=>{
   
      try {
          const response = await fetch("https://itunes.apple.com/search?term=Michael+jackson", {
              method: 'GET',
           });

          const responseJson = await response.json();
          console.log('lists==' + JSON.stringify(responseJson));
          this.setState({
              list: responseJson.results,
              loading:false,
             
});
console.log('lists==' + JSON.stringify(this.state.list));

      } catch (e) {
          console.log("Error in Catch ===  " + JSON.stringify(e));
         
         
      }

   }


   
    
    render() {
         return (
            <SafeAreaView style={styles.MainContainetr}>
          <ActivityIndicator size="small" color="blue" animating={this.state.loading} />
            
            <View style={styles.bookingListContainer}>
            <FlatList style={{height:'100%',}}
            data={this.state.list}
            extraData={this.state}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}


        
            renderItem={({ item, index }) => (
<TouchableOpacity onPress={()=>
  
  {
    this.props.navigation.navigate('DetailPage',{songItemDetail:item})
  }}>
                 <View style={styles.bookingItemContainer}>
                   
                   <View style={styles.bookingItemRow1}>
                     <Image style={styles.bookingHotelImage} source={{uri:item.artworkUrl100}} resizeMode={'cover'}/>
            
                </View>
                <View style={styles.bookingItemRow2}>
                <View style={styles.bookingDetailView}>
                <View style={styles.menuView}>

                    <View style={styles.menuSubView}>
        <Text style={styles.bookingCity}>{item.collectionName}</Text>
                    </View>
                    <View style={styles.menuIconContainer}>
                   
                        
</View>                   
                                      
                    </View>
        <Text style={styles.bookingHotelName}>{item.artistName}</Text>
                    </View>

                </View>


                 </View>
            <View style={{height:10,width:'100%',backgroundColor:'#f2f2f2'}}/>
            </TouchableOpacity>      )}


          />


                {/* <View style={styles.bookingItemContainer}>
                <View style={styles.bookingItemRow1}>
                    <Image style={styles.bookingHotelImage} source={require('../../assets/images/defaultImage.png')} resizeMode={'cover'}/>

                </View>
                <View style={styles.bookingItemRow2}>
                <View style={styles.bookingDetailView}>
                <View style={styles.menuView}>

                    <View style={styles.menuSubView}>
                    <Text style={styles.bookingCity}>London, UK</Text>
                    </View>
                    <View style={styles.menuIconContainer}>
                   
                        
                   <Svg xmlns="http://www.w3.org/2000/svg" width="3" height="13" viewBox="0 0 3 13">
                     <G id="menu" transform="translate(-352 -160)">
                       <Circle id="Ellipse_507" data-name="Ellipse 507" cx="1.5" cy="1.5" r="1.5" transform="translate(352 160)" fill="#3c4043"/>
                       <Circle id="Ellipse_508" data-name="Ellipse 508" cx="1.5" cy="1.5" r="1.5" transform="translate(352 165)" fill="#3c4043"/>
                       <Circle id="Ellipse_509" data-name="Ellipse 509" cx="1.5" cy="1.5" r="1.5" transform="translate(352 170)" fill="#3c4043"/>
                     </G>
                   </Svg>
</View>                   
                                      
                    </View>
                    <Text style={styles.bookingHotelName}>Amba Marble Arch</Text>
                    <Text style={styles.bookingDuration}>For 3Days/2Night</Text>
                    <Text style={styles.bookingDuration}>Booking Date 20-Dec-2020</Text>
                    <Text style={styles.bookingStatus}>Confirmed</Text>
                    <View style={styles.btnContainer}>
                                <TouchableOpacity onPress={() =>
                                    this.updateSearchList()}>
                                    <Text style={styles.btnStyle}>Download E ticket</Text>
                                </TouchableOpacity>

                            </View>

                    </View>

                </View>


                </View>
 */}
            </View> 
       
                {/* </View> */}
                </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    MainContainetr: { backgroundColor: '#f2f2f2',flex:1,paddingHorizontal:10},
    MainContainetrWhite: { backgroundColor: '#fff',flex:1,},
    borderView:{height:10,width:'100%',backgroundColor:'#f2f2f2'},
    bookingListContainer:{ backgroundColor: '#f2f2f2',paddingTop:0,margin:0},
    bookingItemContainer:{flexDirection:'row',backgroundColor:'#fff',padding:10},
    bookingItemRow1:{width:'40%',borderWidth:2,backgroundColor:'#fff',borderColor:'#f2f2f2'},
    bookingItemRow2:{width:'60%',flexDirection:'row',backgroundColor:'#fff',paddingStart:10},
    btnContainer:{backgroundColor: '#006064',  borderWidth: 2, borderColor: '#006064', borderRadius: 5,bottom:0,position:'absolute',width:'100%' },
    menuView:{flexDirection:'row',width:'100%'},
    menuSubView:{flexDirection:'row',width:'95%'},
    menuIconContainer:{flexDirection:'row-reverse',width:'5%',paddingTop:5},

    btnStyle:{ textAlign: "center", color: '#fff',  fontFamily:'Montserrat-Regular', fontSize: 14, lineHeight: 45 },
    bookingDetailView:{width:'100%',overflow:"hidden",},
    bookingHotelImage:{width:'100%',height:100,borderRadius:5,borderColor:'transparent'},
    bookingCity:{fontSize:14,lineHeight:16,color:'#777',fontFamily:'Montserrat-Medium'},
    bookingHotelName:{fontSize:16,lineHeight:20,color:'#3c4043',fontFamily:'Montserrat-SemiBold'},
    bookingDuration:{fontSize:12,lineHeight:20,color:'#777',fontFamily:'Montserrat-Medium'},
    bookingStatus:{fontSize:12,lineHeight:20,color:'#009a14',fontFamily:'Montserrat-SemiBold'},

    tabBar: {
        flexDirection: 'row',
        
      },
      tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
        backgroundColor:'red'
      },
    
      tabbar: {
        backgroundColor: '#f2f2f2',
        width:'100%'
      },
      tab: {
        flex:1,
      },
      indicator: {
        backgroundColor: '#00808a',
    
      },
      label: {
        color: '#000',
        fontSize: 14,
        lineHeight: 18,
    
      },
      emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      emptyText: {
        fontSize: 20,
      },
    
});
