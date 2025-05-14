import React from "react";

function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">קצת עליי</h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          <p>
            היי, שמי תום כהן.
            <br />
            אפטריסט, עורך וידאו, אנימטור, קולוריסט ומעצב גרפי. בוגר בתי הספר
            Blink למקצועות הפוסט פרודקשן, מכללת מנטור וסטודיו 6B. מתמחה בעריכת
            סרטוני תדמית לבתי עסק ופרטיים, סרטוני קידום מכירות, סרטוני
            Infographics, עריכת וידאו ומצגות לאירועים ועיצוב גרפי.
            <br />
            <strong>ומה הסיפור שלכם ?</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
