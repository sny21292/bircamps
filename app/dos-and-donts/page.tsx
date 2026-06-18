import type { Metadata } from "next";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = {
  title: "Do's & Don'ts",
  description: "A few simple do's and don'ts to help everyone enjoy camping at Bir Camps in Bir Billing safely and responsibly.",
  alternates: { canonical: "/dos-and-donts" },
};

export default function DosAndDonts() {
  return (
    <>
      <PageHead index="Good to know" crumb="Do's & Don'ts" title={<>Do&apos;s &amp; Don&apos;ts</>} />
      <article className="prose">
        <p className="lead">A camp in the mountains works best when everyone looks after it together. A few simple things to keep in mind during your stay.</p>

        <h2>Please do</h2>
        <ul>
          <li>Carry a warm layer — nights at altitude get cold, even in summer.</li>
          <li>Keep noise down after 10pm so everyone can enjoy the quiet.</li>
          <li>Use the bins provided and take any trekking litter back with you.</li>
          <li>Stay on marked paths near the river — rocks can be slippery.</li>
          <li>Tell us about any medical conditions or dietary needs in advance.</li>
          <li>Ask before lighting or adding to the bonfire.</li>
        </ul>

        <h2>Please don&apos;t</h2>
        <ul>
          <li>Don&apos;t damage plants, trees or wildlife — leave the valley as you found it.</li>
          <li>Don&apos;t swim alone in the river or enter it after heavy rain.</li>
          <li>Don&apos;t bring loud speakers; the mountains are the soundtrack here.</li>
          <li>Don&apos;t leave food open in tents — it attracts animals.</li>
          <li>Don&apos;t drink and then ride mountain roads.</li>
        </ul>

        <h2>Safety</h2>
        <p>For paragliding and treks, always follow your pilot&apos;s or guide&apos;s instructions. Weather in the Himalayas changes fast — if we advise rescheduling an activity, it&apos;s for your safety.</p>

        <blockquote>Treat the camp like a friend&apos;s home in the mountains, and you&apos;ll have a wonderful time.</blockquote>
      </article>
    </>
  );
}
