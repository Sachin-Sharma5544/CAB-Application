import InputFieldGroups from "../../../Utility/Input Groups/InputFieldGroups";
import Aux from "../../../Hoc/Aux";
import DropdownElement from "../../../Utility/Dropdowns/DropdownElement";
import ButtonElement from "../../../Utility/Buttons/ButtonElement";
import BoxContainer from "../../../Hoc/BoxContainer";
import { useDropContext } from "../../../../hooks/useDropContext";
import { usePickupContext } from "../../../../hooks/usePickupContext";
import { useRef, useState } from "react";

const bookRideInitialState = [
    { name: "Drop", type: "text", placeholder: "Drop location", value: "" },
    {
        name: "Pickup",
        type: "text",
        placeholder: "Pickup location",
        value: "",
    },
    // {
    //     name: "Ridetype",
    //     type: "select",
    //     placeholder: "Ride Type",
    //     value: "",
    // },
];

const RideForm = (props) => {
    const [bookRideFields, setBookRideFields] = useState(bookRideInitialState);

    const rideRefs = useRef(["dropRef", "pickupRef"]);

    const [directionsResponse, setDirectionsResponse] = useState(null);
    const [distance, setDistance] = useState(null);
    const [duration, setDuration] = useState(null);

    // const { pickupLocation, dispatch: dispatchP } = usePickupContext();
    // const { dropLocation, dispatch: dispatchD } = useDropContext();

    const calculateRoute = async () => {
        if (
            rideRefs.current[0].value === "" ||
            rideRefs.current[1].value === ""
        ) {
            return;
        }

        const directions = new window.google.maps.DirectionsService();
        console.log(directions);
        const results = await directions.route({
            origin: rideRefs.current[0].value,
            destination: rideRefs.current[1].value,
            travelMode: window.google.maps.TravelMode.DRIVING,
        });

        setDirectionsResponse(results);
        setDistance(results.routes[0].legs[0].distance.text);
        setDuration(results.routes[0].legs[0].duration.text);

        console.log(distance, duration);
    };

    const changedHandler = (e, index) => {
        const newFormValues = [...bookRideFields];
        newFormValues[index].value = e.target.value;
        setBookRideFields(newFormValues);
        calculateRoute();
    };

    return (
        <Aux>
            {bookRideFields.map((field, index) => (
                <InputFieldGroups
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    Changed={(e) => changedHandler(e, index)}
                    key={index}
                    ipvalue={field.value}
                    refr={(el) => (rideRefs.current[index] = el)}
                />
            ))}
            <DropdownElement placeholder="Ride Type"></DropdownElement>
            <BoxContainer className="RideInfo__Search">
                <ButtonElement>Search Cabs</ButtonElement>
                <ButtonElement handleClick={props.handleRecenter}>
                    Re-Center
                </ButtonElement>
                <ButtonElement>Book Ride</ButtonElement>
            </BoxContainer>
        </Aux>
    );
};

export default RideForm;
