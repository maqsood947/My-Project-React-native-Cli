import { View, Text, StyleSheet } from "react-native"


 const SummaryContent=()=>{
    return(

<View style={styles.summary}>
<View style={styles.summaryContent}>
   
    </View>
</View>
    )
};



const styles = StyleSheet.create({
   
    
    summaryContent: {
        backgroundColor: '#023C4D',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 10,
        flex: 2,
        flexDirection: "row",
        elevation: 10,
        width: 75,
        height: 75,
        borderWidth: 1,       
        borderColor: 'white',     
        borderRadius: 10,
        marginVertical:0

    },


    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    summaryItem: {
        alignItems: 'center',
    },
    summaryText: {
        color: 'white',
        fontSize: 18,
    },
    summaryAmount: {
        color: 'white',
        fontSize: 16,
        fontWeight: "300",
    },


});
export default SummaryContent;

