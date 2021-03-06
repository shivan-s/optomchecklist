import React, { useState } from "react";
import "./App.css";

const preExamProcedures = [
	"Select exam type",
	"Select date and time of exam",
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
	"Binocular Vision",
	"Best corrected VA for distance and near",
	"CL Examination - Aided VAs",
	"CL Examination - Over Refraction",
	"CL Examination - Fitting notes",
	"CL Examiantion - trail Rx / final Rx",
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
	"Arrangements of further investigate tests",
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
	return itemList.map((procedure, i) => ({
		id: procedure + i,
		title: procedure,
		checked: false,
	}));
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
	const [items, setItems] = useState(objectProcedures);
	const count = items.reduce(
		(previous, value) => previous + (value.checked ? 1 : 0),
		0
	);
	const onChange = (itemThatWasClicked, checked) => {
		const newItems = items.map((item) => {
			if (item.title === itemThatWasClicked) {
				return { title: item.title, checked: checked };
			} else {
				return item;
			}
		});
		setItems(newItems);
	};
	return (
		<section>
			<h2
				className={
					count === objectProcedures.length ? "completed" : "incomplete"
				}
			>
				{subheading} ({count}/{objectProcedures.length})
			</h2>
			<ul style={{ textAlign: "Left" }}>
				{items.map((item) => (
					<p className={item.checked ? "checked" : ""} id={item.id}>
						<label>
							<input
								type="checkbox"
								onChange={(event) =>
									onChange(item.title, event.currentTarget.checked)
								}
							/>
							{item.title}
						</label>
					</p>
				))}
			</ul>
		</section>
	);
}

function Footer() {
	return (
		<footer>
			<p>Made by Shivan Sivakumaran - {new Date().getFullYear()}</p>
			<p>
				<a href="https://github.com/shivans93/optomchecklist">Source Code</a>
			</p>
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
			/>
			<Footer />
		</div>
	);
}
export default App;
