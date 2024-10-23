import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
    const travelList = travelPlansData;

    return (
        <div className="travelListContainer">
            {travelList.map((travelObj) => {
                // Define label inside the map function
                let label;
                if (travelObj.totalCost < 350) {
                    label = <span className="dealLabel">Deal</span>;
                } else if (travelObj.totalCost > 1500) {
                    label = <span className="premiumLabel">Premium</span>;
                }

                return (
                    <div key={travelObj.id} className="travelCard">
                        <img src={travelObj.image} alt={`Destination: ${travelObj.destination}`} />
                        <p>Destination: {travelObj.destination}</p>
                        <p>Days: {travelObj.days}</p>
                        <p>All inclusive: {travelObj.allInclusive ? "Yes" : "No"}</p>
                        <p>Total cost: {travelObj.totalCost}</p>
                        <p>Description: {travelObj.description}</p>
                        {/* Display the label if defined */}
                        {label && <div>{label}</div>}
                    </div>
                );
            })}
        </div>
    );
}

export default TravelList;
