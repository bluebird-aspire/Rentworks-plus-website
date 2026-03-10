import LegalModal, { type LegalSection } from './LegalModal';

interface TermsOfServiceModalProps {
  open: boolean;
  onClose: () => void;
}

const termsSections: LegalSection[] = [
  {
    title: 'Definitions',
    content: (
      <div className="space-y-2">
        <p>
          <strong style={{ color: 'var(--theme-text)' }}>Source Code</strong> means the software whether as it is originally written by a human in plain text and more broadly including machine code and notations in graphical languages that may or may not have been compiled from the original text.
        </p>
        <p>
          <strong style={{ color: 'var(--theme-text)' }}>Bluebird Auto Rentals/Us</strong> means Bluebird Auto Rentals Ltd, a limited liability registered in England No. 11538126 – Incorporated on 25 August 2018 together with its subsidiaries. Bluebird Auto Rentals Website means https://www.barsnet.com/
        </p>
        <p>
          <strong style={{ color: 'var(--theme-text)' }}>You</strong> means any business which is a Customer of Bluebird Auto Rentals and any person employed by, associated with, or contracted to any Customer or its affiliates.
        </p>
      </div>
    ),
  },
  {
    title: 'Payment of Fees and Charges',
    content: (
      <>
        <p>You agree to pay invoices for Fees and Charges immediately upon receipt or in accordance with agreed and specified terms detailed in Your Service Agreement with Us. Any queries must be raised, within 14 days of the Invoice date, no item under query shall delay the payment of any undisputed portion of that Invoice nor any other invoice that is due for payment. We do not offer credit terms and do not render monthly statements as a matter of course. It is Your responsibility to ensure that all invoices are paid on time and it is not Our responsibility to ask for payment beyond the action of sending the invoices.</p>
        <p>Monthly recurring charges including transaction revenue are invoiced retrospectively to the month in which they arose. Charges for professional services such as programming, training, consulting and any other items of expense are invoiced and payable in advance unless on an agreed schedule.</p>
        <p>In the event that invoices are not paid when due and despite repeated requests for payment, remain unpaid, then We reserve the right to suspend or withdraw access to the Services, to pursue recovery using professional and/or legal actions which costs will be Your responsibility, to terminate this Agreement, and to charge interest on all unpaid invoices at the rate of 2% per month or part thereof compounded up to the date of final receipt.</p>
      </>
    ),
  },
  {
    title: 'Right to Use Applications',
    content: (
      <p>You are granted a conditional right to use the software Applications and Services strictly in accordance with these Terms of Service and no other right whatsoever. This right is non-exclusive and non-transferrable.</p>
    ),
  },
  {
    title: 'Access & User Security',
    content: (
      <p>You are responsible for maintaining user security within Your organization. You are responsible for managing the access to the Services of any person employed by You or authorized by You at one time or another to access the Services and for the level of access and permissions which that person is granted. You are responsible for ensuring that user passwords are not shared between different persons, that they are kept strictly confidential, that they are sufficiently secure in their format, that they are changed when appropriate, that users are restricted according to Your company policy and blocked from access when You deem it appropriate or when they leave Your employment.</p>
    ),
  },
  {
    title: 'Third Party Rights',
    content: (
      <p>You may grant third parties rights to store and retrieve Data in Our systems, with our prior written permission, for purposes agreed between Your respective businesses and in so doing You acknowledge that they are granted those rights in accordance with these Terms of Service to which they are equally bound and that any dispute arising from their use of the Services is a matter between You and that third party. We may have rights against third parties under these Terms of Service but You have no rights against Us in such circumstances including but not limited to the modification or deletion of Data.</p>
    ),
  },
  {
    title: 'Performance & Data Security',
    content: (
      <p>We undertake to manage the maintenance, reliability and security of our systems using reasonable skill and care and in accordance with our Information Security Policy. We offer no guarantee that the Services will be uninterrupted or error free nor that Your data will be safe from all possible risks. We intend the Services to be available to You 24 hours per day every day but there will be occasions when We need to take aspects of the Service off-line in order to perform upgrades or maintenance. We will give as much notice as possible of any such events and will take all reasonable efforts to ensure that the time offline is limited to the shortest possible for the task involved. We will maintain routine backups of all Data stored in our systems but You must maintain copies of all Data entered into Bluebird Auto Rentals systems using these Services. In the event of a loss of Data We will make every reasonable effort to recover such Data but expressly exclude any liability for any loss of Data, except where such loss arose as a direct result of neglect or misconduct on our part.</p>
    ),
  },
  {
    title: 'Advice & Support',
    content: (
      <>
        <p>We may offer You advice on procedures and practices to assist You in running Your business and on the use of the Services. Such advice is provided on the strict understanding that You are ultimately and exclusively responsible for the way you choose to run Your business and how You choose to use the Services we provide.</p>
        <p className="mt-3">The goal of the support services provided by Us is to provide timely, well-defined solutions to Your issues. To achieve this, it is important that Your staff are properly trained and resourced within the business. Support is provided 24 hours a day Monday through Friday and available 24/7 for emergency technical issues.</p>
      </>
    ),
  },
  {
    title: 'Confidentiality & IP',
    content: (
      <>
        <p>The Service Agreement, all Data recorded under the Terms of Service, all correspondence between us in connection with this Agreement and or the business dealings and procedures of both You and Us is deemed to be confidential. Each party agrees to make reasonable efforts to ensure that such confidentiality is maintained at all times. This obligation on each party shall survive any lawful termination of the Service Agreement indefinitely.</p>
        <p className="mt-3">We retain title to all rights in the Applications, Source Code, Services, documentation and literature as well as the Bluebird Auto Rentals name and any products or services marketed under that or any other brand name belonging to Us.</p>
      </>
    ),
  },
  {
    title: 'Ownership of Data',
    content: (
      <p>You will retain title to the Data recorded by You and to the Intellectual Property rights contained in that Data. You grant Us rights to access and use that Data for the purposes of providing and improving the Services provided under this Agreement and We may copy, store, transmit, backup, report upon, produce statistics from, or do any other thing we need to do with that Data in order to fulfil our obligations hereunder.</p>
    ),
  },
  {
    title: 'Term & Termination',
    content: (
      <>
        <p>By making use of the Services You enter into an Agreement with Us which has a minimum initial term of twelve calendar months from the date of commencement. Continued use after the expiration of the initial term extends that term automatically by one calendar month on a rolling month by month basis.</p>
        <p className="mt-3">Either party may terminate this Agreement by giving a minimum of three months' notice. All Fees and Charges that would otherwise have been due from You, had the Agreement not been terminated, shall remain due and payable in the normal manner up to the expiration of that notice period. In extreme circumstances We may terminate this Agreement immediately and remove access to the Data and Services.</p>
      </>
    ),
  },
  {
    title: 'Liability & Warranty',
    content: (
      <>
        <p>We provide these Services on an as-is basis strictly under these Terms of Service and make no warranty of any kind including but not limited to their suitability or fitness for any purpose. Any and all warranty is specifically excluded.</p>
        <p className="mt-3">You indemnify Us against any and all claims, loss, costs or damage arising from Your use of the Services or any breach by You of this Agreement.</p>
        <p className="mt-3">To the maximum extent permitted by law We shall not be responsible for any loss, damage or claim by any party or person directly or indirectly no matter how such loss, damage or claim is deemed to have arisen. In the event that such limitation is deemed unlawful, the maximum amount payable in settlement of any such claim shall be limited to one dollar (USD 1.00$).</p>
      </>
    ),
  },
  {
    title: 'General Provisions',
    content: (
      <>
        <p><strong style={{ color: 'var(--theme-text)' }}>Waiver:</strong> Any waiver of any breach will only be effective if made in writing and notified to the other party.</p>
        <p className="mt-3"><strong style={{ color: 'var(--theme-text)' }}>Force Majeure:</strong> Neither party shall be held liable for any breach of this Agreement where the circumstances are held to be entirely outside the reasonable control of the party deemed to be in breach.</p>
        <p className="mt-3"><strong style={{ color: 'var(--theme-text)' }}>Severability:</strong> If any part of this Agreement is deemed invalid, it is replaced with an appropriate lawful alternative and the remainder of the Agreement shall be binding on all parties.</p>
        <p className="mt-3"><strong style={{ color: 'var(--theme-text)' }}>Applicable Law:</strong> These Terms and Conditions are governed by the laws of the State of New Jersey. The parties hereby consent to the exclusive jurisdiction and venue of courts of Morris County, State of New Jersey.</p>
        <p className="mt-3"><strong style={{ color: 'var(--theme-text)' }}>Entire Agreement:</strong> The Service Agreement together with these Terms of Service constitute the entire agreement between You and Us and supersede any and all prior agreements. Where any conflict arises, it shall be the Service Agreement that takes primacy.</p>
      </>
    ),
  },
];

export default function TermsOfServiceModal({ open, onClose }: TermsOfServiceModalProps) {
  return (
    <LegalModal
      isOpen={open}
      onClose={onClose}
      title="Terms of Service"
      sections={termsSections}
    />
  );
}
