import Accordion from "../elements/accordion";
import AccordionItem from "../elements/accordion-item";

export default function CommonQuestions() {
  return (
    <section id="q-and-a">
      <Accordion>
        <AccordionItem id="cost" heading="כמה זה עולה להשתמש בשירות?">
          העלות שימוש בשירות כעת היא חינמית בהחלט! כלומר, אתם יכולים להשתמש
          בשירות ללא עלות כלל.
        </AccordionItem>
        <AccordionItem id="register" heading="נדרש להרשם לאתר כדי ליצור תכנית?">
          ממש לא!, ניתן לייצר תוכניות באופן חופשי ללא תשלום בכל עת ללא הרשמה,
          ולשלוח את התכנית במייל למי שתרצו ללא הגבלה.
          <br />
          שימו לב כי ההפקה של קובץ הPDF היא דרך האתר בלבד ולא ניתן לשלוח את
          הקובץ ישירות מהאתר אלא בצורה עצמאית.
        </AccordionItem>
        <AccordionItem
          id="lost-plan"
          heading="איבדתי את התכנית שיצרתי, מה ניתן לעשות?"
        >
          לצערנו במועד זה במידה ואיבדתם את הקישור לתכנית, ולא שלחתם את הקישור
          לתכנית אליכם למייל, לא ניתן לשחזר את הקישור וניתן ליצור את התכנית מחדש
          בכל עת.
        </AccordionItem>
        <AccordionItem
          id="pro"
          heading="האם התבנית מאושרת על ידי מאמנים מוסמכים?"
        >
          לא, התבנית אינה מאושרת על ידי מאמנים מוסמכים ואינה מהווה תחליף לייעוץ
          או כל דבר שבסגנון. השירות נוצר על ידי מתאמן חובב ואינו מהווה איזשהי
          תחליף לתכניות שנוצרו על ידי מאמנים מוסמכים.
        </AccordionItem>
        <AccordionItem
          heading="האם ניתן לשנות את התכנית אחרי שנשלחה?"
          id="can-change"
        >
          מכיוון שהשימוש במערכת הינה בתור אורחים בלבד, נכון למועד זה לא ניתן
          לשנות תבניות שנוצרו אלא ליצור אחת חדשה.
        </AccordionItem>
      </Accordion>
    </section>
  );
}
