import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ClothCard from "./Cloth-Card";
import clothing from "../clothing";

function App() {
    function createCloth(clothing) {
        return (
            <ClothCard 
                key={clothing.id}
                scr={clothing.imgURL}
                name={clothing.name}
            />
        )
    }

    return (
        <div>
            <Header />
            <div className="main">
            {clothing.map(createCloth)}
            </div>
            <Footer />
        </div>
    );
}

export default App;