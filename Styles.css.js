import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
    	backgroundColor: '#20272F',
		color: '#ddd',
    	alignItems: 'center',
    	justifyContent: 'center',
        lineHeight: 100,
	},
  	text: {
		color: '#ddd',
        fontSize: 20,
  	},
	title: {
		fontSize: 27,
		color: "#dff"
	},
  	button: {
		color: "#fff",
		backgroundColor: "#111a2F",
		borderColor: "#FFFFFF",
		borderStyle: "solid",
        borderWidth: 1,
		borderRadius: 12,
		padding: 5,
        margin: 50,
        width: '40%',
        alignContent: 'center',
        alignItems: 'center',
  	},
});

export default styles;