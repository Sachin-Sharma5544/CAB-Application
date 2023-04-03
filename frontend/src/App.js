import { ChakraProvider, Heading, Box } from "@chakra-ui/react";
import Navbar from "./components/Project/Header/Navbar";
import Home from "./pages/Home/Home";

import RideForm from "./components/Project/BookRide/Ride Form/RideForm";
import ButtonElement from "./components/Reusable/Buttons/ButtonElement";
import GoogleMaps from "./components/Project/BookRide/Google Maps/GoogleMaps";
import BookRidePage from "./pages/Book Ride/BookRidePage";

function App() {
    const styleObj = {
        border: "1px solid transparent",
        backgroundImage:
            "url('https://lh3.googleusercontent.com/M9dRt3sJK8ukzk28KMD0xOvuQVuaqRh5yT8fmVgJ9pkas2ZVgs7JXeCWQex6zuWnxWyrWgXrmkdIMm3CrE0dLSKr0LAcV_1Gecut1mxt')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundColor: "rgba(0,0,0,0.3)",
    };

    const newStyleObj = {
        boxShadow: "5px 7px 10px rgba(50,50,50,0.3)",
        padding: "50px 0px",
        borderRadius: "10px",
        borderColor: "rgba(0,0,0,0.1)",
        border: "1px",
        maxW: "700px",
        margin: "200px 20px",
        backgroundColor: "rgba(255,255,255,1)",
        position: "relative",
        zIndex: "1",
    };

    console.log(process.env.REACT_APP_API_KEY);
    return (
        <ChakraProvider>
            <div className="App">
                <BookRidePage></BookRidePage>

                {/* <Box className="Wrapper"></Box> */}
            </div>
        </ChakraProvider>
    );
}

export default App;

// <ChakraProvider>
//     <div className="App">
//         <BoxContainer styles={styleObj} name="Sachin">
//             <BoxContainer styles={newStyleObj}>
//                 <Heading textAlign={"center"} margin={"20px 10px"}>
//                     Smart Ride Details
//                 </Heading>
//                 <RideForm></RideForm>
//                 <RideForm></RideForm>
//                 <ButtonElement margin={"0px auto"}>
//                     Submit
//                 </ButtonElement>
//             </BoxContainer>
//         </BoxContainer>
//     </div>
// </ChakraProvider>
