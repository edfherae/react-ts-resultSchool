import React from "react"

export default function IntroSection() {
    return React.createElement("section", null, [
        React.createElement("h1", {className: "text-center", key: 1}, "Result University"),
        React.createElement("h3", {className: "text-center", style: {color: "#666"}, key: 2}, "Университет frontend-разработки, который насыщает IT-сферу квалифицированными программистами")
    ]
    );
}

// export default function IntroSection() {
//     return <section>
//         <h1 className="text-center">Result University</h1>
//         <h3 className="text-center" style={{color: "#666"}}>
//             Университет frontend-разработки, который насыщает IT-сферу квалифицированными программистами
//         </h3>
//     </section>
// }