// ServiceDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import services from '../data/services.json';
import Layout from './Layout';
import { MdArrowForwardIos } from "react-icons/md";


const ServiceDetails = () => {
    const { id } = useParams(); // Get the id parameter from the URL

    // Find the service with the matching id
    const service = services.find(service => service.id === parseInt(id));

    if (!service) {
        return <div>Service not found</div>;
    }

    const renderDescription = (description) => {
        if (typeof description === 'string') {
            return <p className="mb-4">{description}</p>;
        } else if (Array.isArray(description)) {
            return description.map((item, index) => (
                <div key={index} className="mb-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    {item.details.map((detail, idx) => (
                        <p key={idx} className="mb-2">{detail.description}</p>
                    ))}
                </div>
            ));
        }
        return null;
    };

    return (
        <Layout>
            <div className="py-8 lg:mx-20 md:mx-10 sm:mx-4 mx-4">
                <div className="mx-auto">
                    <img src={service.featureImage} alt={service.title} className="mb-4 h-96 w-full object-cover rounded shadow-xl" />
                    <h1 className="text-center  lg:text-4xl text-3xl lg:leading-9 leading-7  font-semibold">{service.title}</h1>
                    <p className="text-sm font-medium  mb-2 text-center text-gray-400">- {service.excerpt} -</p>
                    <br />
                    <hr className='' />
                    <br />
                    {service.content.map((section, index) => (
                        <div key={index} className="mb-6">
                            <h2 className="font-medium  text-xl leading-5  lg:mb-2 mb-4">{section.heading}</h2>
                            <p className='font-normal  text-sm leading-5  md:ml-0 mx-auto'>{renderDescription(section.description)}</p>

                            <section className='section-bg'>
                                {section.contentDetails && (
                                    <ul className="py-px relative mx-auto grid max-w-[40rem] grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
                                        {section.contentDetails.map((detail, idx) => (
                                            <div className='flex mx-1 py-3'>
                                                <div class="p-0.5">
                                                    <MdArrowForwardIos />
                                                </div>
                                                <li className='ml-6' key={idx}>
                                                    <strong className='text-sm font-semibold leading-6 '>{detail.title}: </strong>
                                                    <p className='mt-2 text-sm leading-6 '>{detail.description}</p>
                                                </li>
                                            </div>
                                        ))}
                                    </ul>
                                )}
                            </section>
                            <section className='section-bg'>
                            {section.commitments && (
                                <ul className="py-px relative mx-auto grid max-w-[40rem] grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
                                    {section.commitments.map((commitment, idx) => (
                                        <div className='flex mx-1 py-3'>
                                            <div class="p-0.5">
                                                <MdArrowForwardIos />
                                            </div>
                                            <li className='ml-6' key={idx}>
                                                <strong className='text-sm font-semibold leading-6'>{commitment.title}: </strong>
                                                <p className='mt-2 text-sm leading-6'>{commitment.description}</p>
                                            </li>
                                        </div>
                                    ))}
                                </ul>
                            )}
                            </section>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default ServiceDetails;
