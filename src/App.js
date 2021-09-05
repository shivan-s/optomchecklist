import React, { useState } from "react";
import "./App.css";

const preExamProcedures = [
	"Create new examination",
	"Select exam type",
	"Record date of last examination / First Eye Exam",
	"Enter previous dispensed Rx - date and lens design / Never worn specs",
	"Record General Health / Medication / Allergies",
	"Record previous Ocular History (include date, condition, specialist)",
	"Record Family History",
	"Record previous Contact Lens Rx in aftercare tab",
];
const examProcedures = [
	"Record chief concern",
	"Update general / ocular / family health",
	"Confirm patient needs",
	"Confirm what correction(s) patient is wearing and how they are used",
	"Unaided Mono and Bino VA",
	"Aided distance and near VAs for specs (and CLs)",
	"Refraction",
	"Best corrected VA for distance and near",
	"CL Examination - AidedVAs",
	"CL Examination - Over Refraction",
	"CL Examination - Fitting notes",
	"Final Rx / Trial Rx",
	"IOP - device and time",
	"K readings",
	"Pachymetry",
	"Anterior eye health",
	"Posterior eye health",
	"Photos",
	"OCT",
	"VF",
	"Summary of findings",
	"Give px written reasource",
	"Make recommendaion",
	"Arrangements of further invetigative tests",
	"Frame selection",
	"Dispensing",
	"Billing",
	"Recall",
];

const postExamProcedures = [
	"Complete Order",
	"Pop-up Notes",
	"Referral letter written and sent",
	"Order Trials contact lenses",
];

function generateObjects(itemList) {
	return itemList.map((procedure, i) => ({ id: i, title: procedure }));
}

const preExamProceduresObjects = generateObjects(preExamProcedures);
const examProceduresObjects = generateObjects(examProcedures);
const postExamProceduresObjects = generateObjects(postExamProcedures);

function Header({ name }) {
	return (
		<header>
			<h1>{name}'s Task List</h1>
		</header>
	);
}

function Main({ subheading, objectProcedures }) {
	return (
		<section>
			<h2>{subheading}</h2>
			<ul style={{ textAlign: "Left" }}>
				{objectProcedures.map((procedure) => (
					<p id={procedure.id}>
						<input type="checkbox" />
						{procedure.title}
					</p>
				))}
			</ul>
		</section>
	);
}

function Footer() {
	return (
		<footer>
			<p>Made by Shivan Sivakumaran {new Date().getFullYear()}</p>
		</footer>
	);
}

function App() {
	return (
		<div className="App">
			<Header name="Optometrist" />
			<Main
				subheading="Pre-Exam Procedure"
				objectProcedures={preExamProceduresObjects}
			/>
			<Main
				subheading="Exam Procedure"
				objectProcedures={examProceduresObjects}
			/>
			<Main
				subheading="Post-Exam Procedure"
				objectProcedures={postExamProceduresObjects}
				k
			/>
			<Footer />
		</div>
	);
}
export default App;
