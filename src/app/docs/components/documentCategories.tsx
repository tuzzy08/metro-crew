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

			<Accordion.Item value='DPMAINTENANCE'>
				<Accordion.Control>DP Maintenance</Accordion.Control>
				<Accordion.Panel>
					<Accordion variant='contained' chevronPosition='left'>
						{/* --------DP Maintenance Cert--------- */}
						<Accordion.Item value='DPMAINT'>
							<Accordion.Control>DP Maintenance Cert</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End DP Maintenance Cert------------- */}
					</Accordion>
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item value='DPSPECCERT'>
				<Accordion.Control>DP Specific Certificate</Accordion.Control>
				<Accordion.Panel>
					<Accordion variant='contained' chevronPosition='left'>
						{/* --------DP Card--------- */}
						<Accordion.Item value='DPCARD'>
							<Accordion.Control>DP Card</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End DP Card------------- */}
						{/* --------DP CPD--------- */}
						<Accordion.Item value='DPCPD'>
							<Accordion.Control>DP CPD</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End DP CPD------------- */}
						{/* --------DP LOG BOOK--------- */}
						<Accordion.Item value='DPLOGBOOK'>
							<Accordion.Control>DP Log Book</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End DP Log Book------------- */}
					</Accordion>
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item value='FLAGSTATE'>
				<Accordion.Control>Flagstate</Accordion.Control>
				<Accordion.Panel>
					<Accordion variant='contained' chevronPosition='left'>
						{/* --------Flagstate COC / GMDSS--------- */}
						<Accordion.Item value='FLAGSTATE'>
							<Accordion.Control>Flagstate COC / GMDSS</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End Flagstate COC / GMDSS------------- */}
						{/* --------Flagstate Seaman Book--------- */}
						<Accordion.Item value='FLAGSTATESEAMANBOOK'>
							<Accordion.Control>Flagstate Seaman Book</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End Flagstate Seaman Book------------- */}
					</Accordion>
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item value='MEDICAL/VACCINATION'>
				<Accordion.Control>Medical / Vaccination</Accordion.Control>
				<Accordion.Panel>
					<Accordion variant='contained' chevronPosition='left'>
						{/* --------COVID 19 Vaccination--------- */}
						<Accordion.Item value='COVID19'>
							<Accordion.Control>COVID 19 Vaccination</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End COVID 19 Vaccination------------- */}
						{/* --------Drugs & Alcohol Test--------- */}
						<Accordion.Item value='D&A'>
							<Accordion.Control>Drugs & Alcohol Test</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End Drugs & Alcohol Test------------- */}
						{/* --------Medical Certificate--------- */}
						<Accordion.Item value='MEDICALS'>
							<Accordion.Control>Medical Certificate</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End Medical Certificate------------- */}
						{/* --------Yello Fever Vaccination--------- */}
						<Accordion.Item value='YELLOWFEVER'>
							<Accordion.Control>Yello Fever Vaccination</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End Yello Fever Vaccination------------- */}
					</Accordion>
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item value='OTHER'>
				<Accordion.Control>Other (CV and Other Certificates)</Accordion.Control>
				<Accordion.Panel>
					<Accordion variant='contained' chevronPosition='left'>
						{/* --------CV--------- */}
						<Accordion.Item value='CV'>
							<Accordion.Control>CV</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End CV------------- */}
					</Accordion>
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item value='SEAMANBOOK'>
				<Accordion.Control>Seaman Book</Accordion.Control>
				<Accordion.Panel>
					<Accordion variant='contained' chevronPosition='left'>
						{/* --------Seaman Book National--------- */}
						<Accordion.Item value='SEAMANBOOKNATIONAL'>
							<Accordion.Control>Seaman Book National</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End Seaman Book National------------- */}
					</Accordion>
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item value='SKILLS'>
				<Accordion.Control>Skills (banksman, fitter...)</Accordion.Control>
				<Accordion.Panel>
					<Accordion variant='contained' chevronPosition='left'>
						{/* --------Specific Trainings (fitter, HLO, HLA, Radio op, rigger, banksman...)--------- */}
						<Accordion.Item value='SPECIFICTRAININGS'>
							<Accordion.Control>
								Specific Trainings (fitter, HLO, HLA, Radio op, rigger,
								banksman...)
							</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End Specific Trainings (fitter, HLO, HLA, Radio op, rigger, banksman...)------------- */}
					</Accordion>
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item value='STCW'>
				<Accordion.Control>STCW</Accordion.Control>
				<Accordion.Panel>
					<Accordion variant='contained' chevronPosition='left'>
						{/* --------AFF (Advanced Fire Fighting)--------- */}
						<Accordion.Item value='AFF'>
							<Accordion.Control>
								AFF (Advanced Fire Fighting)
							</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End AFF (Advanced Fire Fighting)------------- */}
						{/* --------BFF (Basic Fire Fighting)--------- */}
						<Accordion.Item value='BFF'>
							<Accordion.Control>BFF (Basic Fire Fighting)</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End BFF (Basic Fire Fighting)------------- */}
						{/* --------BRM (Bridge Resource Management)--------- */}
						<Accordion.Item value='BRM'>
							<Accordion.Control>
								BRM (Bridge Resource Management)
							</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End BRM (Bridge Resource Management)------------- */}
						{/* --------BST (Basic Safety Training)--------- */}
						<Accordion.Item value='BST'>
							<Accordion.Control>BST (Basic Safety Training)</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End BST (Basic Safety Training)------------- */}
						{/* --------ECDIS (Electronic Chart Display & Information System)--------- */}
						<Accordion.Item value='ECDIS'>
							<Accordion.Control>
								ECDIS (Electronic Chart Display & Information System)
							</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End ECDIS (Electronic Chart Display & Information System)------------- */}
						{/* --------ERM (Engine Resource Management)--------- */}
						<Accordion.Item value='ERM'>
							<Accordion.Control>
								ERM (Engine Resource Management)
							</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End ERM (Engine Resource Management)------------- */}
						{/* --------Food Handling Certificate--------- */}
						<Accordion.Item value='FHC'>
							<Accordion.Control>Food Handling Certificate</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End Food Handling Certificate------------- */}
						{/* --------FRB/FRC (Fast Rescue Boat/Craft)--------- */}
						<Accordion.Item value='FRB/FRC'>
							<Accordion.Control>
								FRB/FRC (Fast Rescue Boat/Craft)
							</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End FRB/FRC (Fast Rescue Boat/Craft)------------- */}
						{/* --------HV (High Voltage Cert)--------- */}
						<Accordion.Item value='HV'>
							<Accordion.Control>HV (High Voltage Cert)</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End HV (High Voltage Cert)------------- */}
						{/* --------MCOB (Medical Care Onboard)--------- */}
						<Accordion.Item value='MCOB'>
							<Accordion.Control>MCOB (Medical Care Onboard)</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End MCOB (Medical Care Onboard)------------- */}
						{/* --------MEA (Marine Environmental Awareness)--------- */}
						<Accordion.Item value='MEA'>
							<Accordion.Control>
								MEA (Marine Environmental Awareness)
							</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End MEA (Marine Environmental Awareness)------------- */}
						{/* --------MFA (Medical First Aid)--------- */}
						<Accordion.Item value='MFA'>
							<Accordion.Control>MFA (Medical First Aid)</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End MFA (Medical First Aid)------------- */}
						{/* --------PSCRB (Proficiency In Survival Craft & Rescue Boat Other Than Fast Rescue Boat)--------- */}
						<Accordion.Item value='PSCRB'>
							<Accordion.Control>
								PSCRB (Proficiency In Survival Craft & Rescue Boat Other Than
								Fast Rescue Boat)
							</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End PSCRB (Proficiency In Survival Craft & Rescue Boat Other Than Fast Rescue Boat)------------- */}
						{/* --------Radar / ARPA--------- */}
						<Accordion.Item value='Radar/ARPA'>
							<Accordion.Control>Radar / ARPA</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End Radar / ARPA------------- */}
						{/* --------SAT (Security Awareness Training)--------- */}
						<Accordion.Item value='SAT'>
							<Accordion.Control>
								SAT (Security Awareness Training)
							</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End SAT (Security Awareness Training)------------- */}
						{/* --------SSO (Ship Security Officer)--------- */}
						<Accordion.Item value='SSO'>
							<Accordion.Control>SSO (Ship Security Officer)</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End SSO (Ship Security Officer)------------- */}
						{/* --------STCW Crew Cert--------- */}
						<Accordion.Item value='STCWCREWCERT'>
							<Accordion.Control>STCW Crew Cert</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End STCW Crew Cert------------- */}
					</Accordion>
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item value='STCW (COC)'>
				<Accordion.Control>STCW (COC)</Accordion.Control>
				<Accordion.Panel>
					<Accordion variant='contained' chevronPosition='left'>
						{/* --------COC (Certificate of Competency) Including Endorsement--------- */}
						<Accordion.Item value='COCENDRSE'>
							<Accordion.Control>
								COC (Certificate of Competency) Including Endorsement-
							</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End COC (Certificate of Competency) Including Endorsement-------------- */}
					</Accordion>
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item value='STCW(COC,FRC,CRWD MGMT etc)'>
				<Accordion.Control>
					STCW (CoC, FRC, Crowd Management, GMDSS, etc)
				</Accordion.Control>
				<Accordion.Panel>
					<Accordion variant='contained' chevronPosition='left'>
						{/* --------COC (Certificate of Competency) Including Endorsement--------- */}
						<Accordion.Item value='COCINCLUDINGENDORSEMET'>
							<Accordion.Control>
								COC (Certificate of Competency) Including Endorsement
							</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End COC (Certificate of Competency) Including Endorsement------------- */}
					</Accordion>
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item value='STCW(GOC/GMDSS)'>
				<Accordion.Control>STCW (GOC/GMDSS)</Accordion.Control>
				<Accordion.Panel>
					<Accordion variant='contained' chevronPosition='left'>
						{/* --------GMDSS (Global Maritime Distress and Safety System)--------- */}
						<Accordion.Item value='GMDSSSYS'>
							<Accordion.Control>
								GMDSS (Global Maritime Distress and Safety System)
							</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End GMDSS (Global Maritime Distress and Safety System)------------- */}
					</Accordion>
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item value='TRAVELDOCS'>
				<Accordion.Control>Travel Documents</Accordion.Control>
				<Accordion.Panel>
					<Accordion variant='contained' chevronPosition='left'>
						{/* --------Passport--------- */}
						<Accordion.Item value='PASSPORT'>
							<Accordion.Control>Passport</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End Passport------------- */}
					</Accordion>
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item value='MISC'>
				<Accordion.Control>MISC</Accordion.Control>
				<Accordion.Panel>
					<Accordion variant='contained' chevronPosition='left'>
						{/* -------HERTM (Helideck Emergency Response Team Member)--------- */}
						<Accordion.Item value='HERTMCERT'>
							<Accordion.Control>
								HERTM (Helideck Emergency Response Team Member)
							</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End HERTM (Helideck Emergency Response Team Member)------------- */}
						{/* --------Cook Certificate--------- */}
						<Accordion.Item value='COOKCERT'>
							<Accordion.Control>Cook Certificate</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End Cook Certificate------------- */}
						{/* --------MEA (Marine Environmental Awareness)--------- */}
						<Accordion.Item value='MEACERT'>
							<Accordion.Control>
								MEA (Marine Environmental Awareness)
							</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End MEA (Marine Environmental Awareness)------------- */}
						{/* --------SDSD (Ship Security Awareness Training & Seafarers With Designated Security Duties)--------- */}
						<Accordion.Item value='SDSD'>
							<Accordion.Control>
								SDSD (Ship Security Awareness Training & Seafarers With
								Designated Security Duties)
							</Accordion.Control>
							<Accordion.Panel>Data Table</Accordion.Panel>
						</Accordion.Item>
						{/* -------End SDSD (Ship Security Awareness Training & Seafarers With Designated Security Duties)------------- */}
					</Accordion>
				</Accordion.Panel>
			</Accordion.Item>
		</Accordion>
	);
}
