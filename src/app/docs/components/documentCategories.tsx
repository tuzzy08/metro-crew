'use client';

import { Accordion } from '@mantine/core';

export default function DocumentCategories() {
	return (
		<Accordion
			variant='contained'
			chevronPosition='left'
			// styles={{
			// 	item: {
			// 		// styles added to expanded item
			// 		'&[data-active]': {
			// 			backgroundColor: '#ccc',
			// 		},
			// 	},

			// 	content: {
			// 		color: 'black',
			// 	},
			// }}
		>
			<Accordion.Item value='CLIENTCERT'>
				<Accordion.Control>
					Client Specific Cert (BOSIET, HUET, N1, N2...)
				</Accordion.Control>
				<Accordion.Panel>
					<Accordion variant='contained' chevronPosition='left'>
						{/* --------Banksman & Slinger Training--------- */}
						<Accordion.Item value='banksmanSlingerTraining'>
							<Accordion.Control>Banksman & Slinger Training</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End Banksman & Slinger Training------------- */}
						{/* --------Bosiet / Huet / Foet--------- */}
						<Accordion.Item value='bosietHuetFoet'>
							<Accordion.Control>BOSIET / HUET / FOET</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End Bosiet / Huet / Foet------------- */}
						{/* --------CA-EBS (Compressed Air Emergency Breathing System)--------- */}
						<Accordion.Item value='caEbs'>
							<Accordion.Control>
								CA-EBS (Compressed Air Emergency Breathing System)
							</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End CA-EBS (Compressed Air Emergency Breathing System------------- */}
						{/* --------HERTL (Helicopter Emergency Response Team Leader)--------- */}
						<Accordion.Item value='HERTL'>
							<Accordion.Control>
								HERTL (Helicopter Emergency Response Team Leader)
							</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End HERTL (Helicopter Emergency Response Team Leader)------------- */}
						{/* --------HERTM (Helicopter Emergency Response Team Member)--------- */}
						<Accordion.Item value='HERTM'>
							<Accordion.Control>
								HERTM (Helicopter Emergency Response Team Member)
							</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End HERTM (Helicopter Emergency Response Team Member)------------- */}
						{/* --------HOIT (Helideck Operations Initial Training Course)--------- */}
						<Accordion.Item value='HOIT'>
							<Accordion.Control>
								HOIT (Helideck Operations Initial Training Course)
							</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End HOIT (Helideck Operations Initial Training Course)------------- */}
						{/* --------HUET (Helicopter Underwater Emergency Training)--------- */}
						<Accordion.Item value='HUET'>
							<Accordion.Control>
								HUET (Helicopter Underwater Emergency Training)
							</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End HUET (Helicopter Underwater Emergency Training)------------- */}
					</Accordion>
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item value='DECK'>
				<Accordion.Control>Deck</Accordion.Control>
				<Accordion.Panel>
					<Accordion variant='contained' chevronPosition='left'>
						{/* --------CAA (Civil Aviation Authority)--------- */}
						<Accordion.Item value='CAA'>
							<Accordion.Control>
								CAA (Civil Aviation Authority)
							</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End CAA (Civil Aviation Authority)------------- */}
						{/* --------Crane Operator Stage 3--------- */}
						<Accordion.Item value='CRANE'>
							<Accordion.Control>Crane Operator Stage 3</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End Crane Operator Stage 3------------- */}
						{/* --------OPITO HERTL (Helicopter Emergency Response Team Leader)--------- */}
						<Accordion.Item value='OPITOHERTL'>
							<Accordion.Control>
								OPITO HERTL (Helicopter Emergency Response Team Leader)
							</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End OPITO HERTL (Helicopter Emergency Response Team Leader)------------- */}
					</Accordion>
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item value='focus-ring'>
				<Accordion.Control>No annoying focus ring</Accordion.Control>
				<Accordion.Panel>
					With new :focus-visible pseudo-class focus ring appears only when user
					navigates with keyboard
				</Accordion.Panel>
			</Accordion.Item>
		</Accordion>
	);
}
