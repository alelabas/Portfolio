import { motion } from "framer-motion";
import { usePDFSlick } from "@pdfslick/react";
import pdf from "@/assets/CV-Alejandro-Labastie-English-REACT-NET.pdf";
import "@pdfslick/react/dist/pdf_viewer.css";

export const Resume = () => {
  const { viewerRef, usePDFSlickStore, PDFSlickViewer } = usePDFSlick(pdf, {
    singlePageViewer: true,
    scaleValue: "page-fit",
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="relative mx-auto flex h-screen w-full flex-col"
    >
      <article className="pdfSlick absolute inset-0 flex flex-col gap-5">
        <a
          href={pdf}
          target="_blank"
          className="mx-auto rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
        >
          Download PDF
        </a>
        <div className="relative h-full flex-1">
          <PDFSlickViewer {...{ viewerRef, usePDFSlickStore }} />
        </div>
      </article>
    </motion.section>
  );
};

export default Resume;
