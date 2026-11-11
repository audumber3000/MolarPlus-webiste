/**
 * SAMPLE PROOF, FOR TESTING THE LAYOUT ONLY. Every clinic, doctor and
 * quote below is invented.
 *
 * components/sections/Proof.tsx reads this file only when
 * NODE_ENV is "development" (`npm run dev`) and labels every item
 * "Sample". A production build (`next build`) never renders any of it.
 *
 * The sample clinic logos are drawn SVGs in public/samples/clinics/<key>/,
 * named after each clinic below.
 *
 * To remove the samples: delete this file, the public/samples folder, and
 * the sample import and `sampleLogo` helper in Proof.tsx.
 */

export type SampleClient = { name: string; city: string };
export type SampleTestimonial = { quote: string; name: string; role: string; clinic: string; city: string };

/**
 * The platforms' own logo files, copied from website-molarplus/public/badges
 * into public/listings. They can be shown with links to Curogrid profiles
 * once those profiles exist: the
 * platforms' terms require the logo to link back to the listing.
 * `height` is tuned per logo so the letters look the same size.
 */
export type SampleListing = { name: string; logo: string; width: number; height: number; heightClass: string };

export const SAMPLE_LISTINGS: ReadonlyArray<SampleListing> = [
  { name: "Capterra", logo: "/listings/capterra.png", width: 443, height: 108, heightClass: "h-7" },
  { name: "GetApp", logo: "/listings/getapp.png", width: 934, height: 182, heightClass: "h-7" },
  { name: "Software Advice", logo: "/listings/software-advice.png", width: 1067, height: 138, heightClass: "h-5" },
  { name: "Product Hunt", logo: "/listings/product-hunt.png", width: 3094, height: 568, heightClass: "h-6" },
  { name: "G2", logo: "/listings/g2.png", width: 568, height: 568, heightClass: "h-9" },
];

export const SAMPLE_CLIENTS: Readonly<Record<string, ReadonlyArray<SampleClient>>> = {
  general_practice: [
    { name: "Shree Sai Clinic", city: "Nashik" },
    { name: "Arogya Family Clinic", city: "Indore" },
    { name: "Care Point Clinic", city: "Hyderabad" },
    { name: "Dhanvantari Clinic", city: "Pune" },
    { name: "LifeLine Polyclinic", city: "Surat" },
    { name: "Swasthya Clinic", city: "Jaipur" },
  ],
  paediatrics: [
    { name: "Little Feet Child Clinic", city: "Pune" },
    { name: "Bal Arogya Kendra", city: "Nagpur" },
    { name: "Rainbow Kids Clinic", city: "Bengaluru" },
    { name: "Tiny Tots Paediatrics", city: "Chennai" },
    { name: "Ankur Child Care", city: "Ahmedabad" },
    { name: "Sunshine Children's Clinic", city: "Kochi" },
  ],
  obstetrics_gynaecology: [
    { name: "Matrutva Women's Clinic", city: "Pune" },
    { name: "Sakhi Maternity Care", city: "Indore" },
    { name: "Janani Mother & Child", city: "Lucknow" },
    { name: "Navjeevan Women's Hospital", city: "Kolhapur" },
    { name: "Aastha Gynae Care", city: "Jaipur" },
    { name: "Shubh Maternity Clinic", city: "Vadodara" },
  ],
  dermatology: [
    { name: "Skin Sutra Clinic", city: "Mumbai" },
    { name: "Derma Glow Studio", city: "Bengaluru" },
    { name: "Twacha Skin & Hair", city: "Pune" },
    { name: "Clear Skin Clinic", city: "Hyderabad" },
    { name: "Roots Hair Clinic", city: "Delhi" },
    { name: "Aura Dermatology", city: "Chandigarh" },
  ],
  ent: [
    { name: "Shravan ENT Clinic", city: "Pune" },
    { name: "Sound Health ENT", city: "Chennai" },
    { name: "Swar ENT & Audiology", city: "Nagpur" },
    { name: "Clear Hearing Centre", city: "Bengaluru" },
    { name: "Naad ENT Care", city: "Kolkata" },
    { name: "Breathe Easy ENT", city: "Coimbatore" },
  ],
  physiotherapy: [
    { name: "Active Life Physio", city: "Pune" },
    { name: "FlexiCare Physiotherapy", city: "Mumbai" },
    { name: "Gati Rehab Centre", city: "Nashik" },
    { name: "Spine & Joint Physio", city: "Bengaluru" },
    { name: "Recover Right Clinic", city: "Hyderabad" },
    { name: "Chalo Physio Studio", city: "Ahmedabad" },
  ],
  ophthalmology: [
    { name: "Netra Jyoti Eye Clinic", city: "Pune" },
    { name: "Clear Vision Eye Care", city: "Indore" },
    { name: "Drishti Netralaya", city: "Aurangabad" },
    { name: "Nayan Eye Hospital", city: "Surat" },
    { name: "Lens & Light Eye Clinic", city: "Chennai" },
    { name: "Roshni Eye Centre", city: "Lucknow" },
  ],
  orthopaedics: [
    { name: "Asthi Bone & Joint Clinic", city: "Pune" },
    { name: "OrthoCare Clinic", city: "Nagpur" },
    { name: "Mobility Ortho Centre", city: "Bengaluru" },
    { name: "Joint Plus Clinic", city: "Hyderabad" },
    { name: "Stride Ortho & Sports", city: "Mumbai" },
    { name: "Kanak Fracture Clinic", city: "Raipur" },
  ],
  general_surgery: [
    { name: "Shalya Surgical Clinic", city: "Pune" },
    { name: "City Day Care Surgery", city: "Nashik" },
    { name: "Suraksha Surgical Centre", city: "Bhopal" },
    { name: "Precision Surgery Clinic", city: "Bengaluru" },
    { name: "Arogyam Surgical Care", city: "Jaipur" },
    { name: "Seva Surgical Hospital", city: "Solapur" },
  ],
  diabetology: [
    { name: "Madhumeh Care Centre", city: "Pune" },
    { name: "Sugar Smart Clinic", city: "Chennai" },
    { name: "Balance Diabetes Clinic", city: "Hyderabad" },
    { name: "Thyro-Diab Centre", city: "Kolkata" },
    { name: "Wellness Diabetes Care", city: "Ahmedabad" },
    { name: "Sweet Life Endocrine", city: "Kochi" },
  ],
};

export const SAMPLE_TESTIMONIALS: Readonly<Record<string, ReadonlyArray<SampleTestimonial>>> = {
  general_practice: [
    { quote: "My OPD runs to 70 patients on a Monday. The token line keeps the waiting room calm, and I call the next patient from my phone.", name: "Dr. Sanjay Kulkarni", role: "Family physician", clinic: "Shree Sai Clinic", city: "Nashik" },
    { quote: "The red allergy warning stopped me once already. That alone was worth switching.", name: "Dr. Meenakshi Iyer", role: "General physician", clinic: "Care Point Clinic", city: "Hyderabad" },
    { quote: "Viral fever, gastritis, BP follow-up: I saved them as templates. A prescription now takes me ten seconds.", name: "Dr. Rakesh Sharma", role: "General physician", clinic: "Swasthya Clinic", city: "Jaipur" },
    { quote: "My compounder learnt it in a day. The bills are paid by UPI and I see the day's total at night.", name: "Dr. Anil Deshmukh", role: "Family doctor", clinic: "Dhanvantari Clinic", city: "Pune" },
    { quote: "The blood pressure chart on the patient's file tells me who is slipping before I even ask.", name: "Dr. Farah Khan", role: "Consultant physician", clinic: "LifeLine Polyclinic", city: "Surat" },
  ],
  paediatrics: [
    { quote: "Parents love seeing the growth chart on the screen. The centile answers their first question before they ask it.", name: "Dr. Neha Joshi", role: "Consultant paediatrician", clinic: "Little Feet Child Clinic", city: "Pune" },
    { quote: "The vaccine plan is the best part. Every child's next dose is dated from birth, and my desk sees who is due this week.", name: "Dr. Prakash Rao", role: "Paediatrician", clinic: "Rainbow Kids Clinic", city: "Bengaluru" },
    { quote: "Syrups and drops come first when I type, so I am not scrolling past adult tablets all morning.", name: "Dr. Kavita Menon", role: "Child specialist", clinic: "Sunshine Children's Clinic", city: "Kochi" },
    { quote: "Babies under two go ahead in the line now, and nobody at the desk has to argue about it.", name: "Dr. Amit Patel", role: "Paediatrician", clinic: "Ankur Child Care", city: "Ahmedabad" },
    { quote: "I print the vaccination card from the file. Mothers keep it in the same folder as the hospital papers.", name: "Dr. Sowmya Raghavan", role: "Consultant paediatrician", clinic: "Tiny Tots Paediatrics", city: "Chennai" },
  ],
  obstetrics_gynaecology: [
    { quote: "The weeks and the due date are worked out at every visit. I stopped carrying the pregnancy wheel.", name: "Dr. Sunita Patil", role: "Obstetrician and gynaecologist", clinic: "Matrutva Women's Clinic", city: "Pune" },
    { quote: "Showing the mother her baby's stage on the screen is the moment every visit relaxes.", name: "Dr. Ritu Agarwal", role: "Consultant gynaecologist", clinic: "Janani Mother & Child", city: "Lucknow" },
    { quote: "No more missed NT scans. The plan dates every scan window from the LMP and my receptionist calls the patients due.", name: "Dr. Shalini Mehta", role: "Obstetrician", clinic: "Aastha Gynae Care", city: "Jaipur" },
    { quote: "The antenatal check takes under a minute: fundal height, heart rate, urine, done.", name: "Dr. Archana Jadhav", role: "Gynaecologist", clinic: "Navjeevan Women's Hospital", city: "Kolhapur" },
    { quote: "It never records the baby's sex, which is exactly how a PCPNDT-registered clinic should work.", name: "Dr. Pooja Shah", role: "Obstetrician and gynaecologist", clinic: "Shubh Maternity Clinic", city: "Vadodara" },
  ],
  dermatology: [
    { quote: "Before and after photos side by side close the conversation. Patients see the melasma fading for themselves.", name: "Dr. Ananya Reddy", role: "Consultant dermatologist", clinic: "Clear Skin Clinic", city: "Hyderabad" },
    { quote: "The guide picture means my assistant takes every photo at the same angle. Comparisons finally mean something.", name: "Dr. Rohan Malhotra", role: "Dermatologist", clinic: "Skin Sutra Clinic", city: "Mumbai" },
    { quote: "Hair patients drop off after two PRP sessions. Now I show them the parting at week twelve and they finish the course.", name: "Dr. Kiran Bhatia", role: "Trichologist and dermatologist", clinic: "Roots Hair Clinic", city: "Delhi" },
    { quote: "Every peel's strength and passes are on the session, so the next one starts from the right setting.", name: "Dr. Shreya Kulkarni", role: "Cosmetic dermatologist", clinic: "Twacha Skin & Hair", city: "Pune" },
    { quote: "Acne grade, Fitzpatrick type, Norwood stage: all taps. My notes are better than they were on paper.", name: "Dr. Vivek Nair", role: "Dermatologist", clinic: "Derma Glow Studio", city: "Bengaluru" },
  ],
  ent: [
    { quote: "I type the thresholds and the audiogram is there, each ear graded. Patients understand their hearing loss at last.", name: "Dr. Rajesh Iyer", role: "ENT surgeon", clinic: "Sound Health ENT", city: "Chennai" },
    { quote: "The change since last year's test is right on the screen. It makes the hearing aid conversation easy.", name: "Dr. Smita Deshpande", role: "Otolaryngologist", clinic: "Swar ENT & Audiology", city: "Nagpur" },
    { quote: "Both ears side by side, Rinne and Weber in a tap. It is how I examine, so it is how I write.", name: "Dr. Arjun Menon", role: "ENT specialist", clinic: "Clear Hearing Centre", city: "Bengaluru" },
    { quote: "My audiologist enters the test in her room and I see it before the patient walks back in.", name: "Dr. Subhash Ghosh", role: "ENT surgeon", clinic: "Naad ENT Care", city: "Kolkata" },
    { quote: "The printed hearing test looks professional. Patients carry it to the hearing aid centre.", name: "Dr. Lakshmi Sundaram", role: "ENT consultant", clinic: "Breathe Easy ENT", city: "Coimbatore" },
  ],
  physiotherapy: [
    { quote: "The body map and pain score make my assessment quick and complete. I never forget to ask the red flags now.", name: "Dr. Priya Raman", role: "Physiotherapist, MPT Ortho", clinic: "Spine & Joint Physio", city: "Bengaluru" },
    { quote: "Patients actually do their home exercises because the sheet has pictures. My session results improved.", name: "Dr. Nikhil Joshi", role: "Sports physiotherapist", clinic: "Active Life Physio", city: "Pune" },
    { quote: "I book all six sessions in one go. Drop-outs fell because every patient leaves with the dates.", name: "Dr. Swati Pawar", role: "Physiotherapist", clinic: "Gati Rehab Centre", city: "Nashik" },
    { quote: "Home visits used to be on paper. Now I write the session and take the UPI payment on my phone at the patient's house.", name: "Dr. Imran Shaikh", role: "Neuro physiotherapist", clinic: "Recover Right Clinic", city: "Hyderabad" },
    { quote: "The missed session flag tells my front desk exactly who to call back on Monday.", name: "Dr. Hetal Desai", role: "Physiotherapist", clinic: "Chalo Physio Studio", city: "Ahmedabad" },
  ],
  ophthalmology: [
    { quote: "Both eyes on one screen and a high pressure in orange. I catch glaucoma suspects I might have missed in a busy OPD.", name: "Dr. Vikram Joshi", role: "Consultant ophthalmologist", clinic: "Netra Jyoti Eye Clinic", city: "Pune" },
    { quote: "My optometrist enters vision and refraction before I see the patient, so my consultation starts at the slit lamp.", name: "Dr. Radhika Iyer", role: "Ophthalmologist", clinic: "Lens & Light Eye Clinic", city: "Chennai" },
    { quote: "The glasses prescription prints in one tap. No more handwriting cylinders and axes.", name: "Dr. Mohammed Ansari", role: "Eye surgeon", clinic: "Roshni Eye Centre", city: "Lucknow" },
    { quote: "Day one, week one, week four after cataract: the plan tells my desk who is due. Nobody misses their final check.", name: "Dr. Kiran Wagh", role: "Cataract and refractive surgeon", clinic: "Drishti Netralaya", city: "Aurangabad" },
    { quote: "Every visit's pressure in one table makes the glaucoma follow-up a two-minute job.", name: "Dr. Nisha Bhatt", role: "Glaucoma specialist", clinic: "Nayan Eye Hospital", city: "Surat" },
  ],
  orthopaedics: [
    { quote: "I tap the right knee on the body map and the injury note is half written. It is faster than my old OPD paper.", name: "Dr. Sameer Patil", role: "Orthopaedic surgeon", clinic: "Asthi Bone & Joint Clinic", city: "Pune" },
    { quote: "The plaster plan dates every check from the day the cast goes on. My patients come back for the X-ray on time.", name: "Dr. Rahul Verma", role: "Consultant orthopaedician", clinic: "OrthoCare Clinic", city: "Nagpur" },
    { quote: "Pulses, feeling and movement are ticked on every fracture. It is the record I want if anything goes wrong.", name: "Dr. Anand Rao", role: "Trauma surgeon", clinic: "Joint Plus Clinic", city: "Hyderabad" },
    { quote: "My physio room runs on the same system, so after the plaster comes off the sessions are booked right away.", name: "Dr. Gaurav Mehta", role: "Sports orthopaedic surgeon", clinic: "Stride Ortho & Sports", city: "Mumbai" },
    { quote: "Slings, knee caps and belts go on the same bill as the consultation. The counter no longer forgets them.", name: "Dr. Deepak Sahu", role: "Orthopaedic surgeon", clinic: "Kanak Fracture Clinic", city: "Raipur" },
  ],
  general_surgery: [
    { quote: "Day two dressing, day ten stitches out: the plan dates it all from the operation. No patient is forgotten after surgery.", name: "Dr. Mahesh Kale", role: "General surgeon", clinic: "Shalya Surgical Clinic", city: "Pune" },
    { quote: "The before-surgery checklist is the first thing I look at on the morning of a hernia repair.", name: "Dr. Ashok Tiwari", role: "Consultant surgeon", clinic: "Suraksha Surgical Centre", city: "Bhopal" },
    { quote: "Every dressing records the wound and the stitches, so my junior can take over without asking me.", name: "Dr. Shweta Rao", role: "Laparoscopic surgeon", clinic: "Precision Surgery Clinic", city: "Bengaluru" },
    { quote: "Consent is signed on the tablet before the patient goes in. Nothing to file, nothing to lose.", name: "Dr. Vinod Gupta", role: "General surgeon", clinic: "Arogyam Surgical Care", city: "Jaipur" },
    { quote: "Lumps, hernias, piles: a few taps and the examination is recorded properly.", name: "Dr. Nitin Shinde", role: "Surgeon", clinic: "Seva Surgical Hospital", city: "Solapur" },
  ],
  diabetology: [
    { quote: "HbA1c coming down on a chart is the best motivation I can give a patient. They ask to see it every visit.", name: "Dr. Suresh Menon", role: "Diabetologist", clinic: "Balance Diabetes Clinic", city: "Hyderabad" },
    { quote: "The yearly checks show done or due. Feet and kidneys used to slip through; not any more.", name: "Dr. Aparna Kulkarni", role: "Consultant endocrinologist", clinic: "Madhumeh Care Centre", city: "Pune" },
    { quote: "Home sugars and insulin in two small tables. A three-monthly review takes me five minutes.", name: "Dr. Ravi Shankar", role: "Diabetologist", clinic: "Sugar Smart Clinic", city: "Chennai" },
    { quote: "Patients take the printed insulin chart home and stop calling to ask how many units at night.", name: "Dr. Moumita Sen", role: "Endocrinologist", clinic: "Thyro-Diab Centre", city: "Kolkata" },
    { quote: "Four reviews a year are booked in one go. My clinic finally runs like a programme, not a walk-in.", name: "Dr. Jignesh Shah", role: "Diabetes physician", clinic: "Wellness Diabetes Care", city: "Ahmedabad" },
  ],
};
