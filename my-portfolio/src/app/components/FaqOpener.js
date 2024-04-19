import Image from "next/image";

export default function FaqOpener({ faqs }) {
    return (
        <div className="max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
                <div key={faq.question}>
                    <details className="my-4">
                        <summary className="font-semibold cursor-pointer list-none text-white flex items-center">
                            <Image src={'/plus.svg'} alt={'plus icon'} width={30} height={30} className={'invert'} />
                            <span className="ml-2">{faq.question}</span>
                        </summary>
                        <p className="mt-2 text-white ml-12">{faq.answer}</p>
                    </details>
                    {index !== faqs.length - 1 && <hr />}
                </div>
            ))}
        </div>
    );
}
