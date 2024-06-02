import React from 'react';
import PropTypes from 'prop-types';
import services from '../data/services.json';

const Services = () => {
    return (
        <div className='mt-20 mb-10 lg:mx-24'>
            <div className="text-center mt-20 mb-10">
                <h2 className="mt-4 mb-4 text-3xl font-bold sm:text-4xl xl:text-5xl">Our solutions</h2>
                <p className="text-lg font-medium">Explore our range of specialized solutions designed to meet the unique needs of every client we serve.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {services && services.map(service => (
                    <div
                        key={service.id}
                        className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow hover:shadow-lg dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href={`/services/${service.id}`}>
                            <img
                                className="rounded-t-lg"
                                src={service.featureImage}
                                alt={`${service.title} Service feature image`} />
                        </a>
                        <div className="p-6">
                            <h5 className="text-center mb-2 text-xl font-bold leading-tight uppercase service-title">{service.title}</h5>
                            <p className="mb-4 text-gray-950 text-center">
                                {service.excerpt}
                            </p>
                        </div>
                        <div className="mt-auto border-t-2 border-neutral-100 text-center">
                            <a
                                className='block rounded-b button-bg uppercase p-3 w-full object-contain text-center'
                                href={`/services/${service.id}`}>Explore more</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

Services.propTypes = {
    services: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        featureImage: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        excerpt: PropTypes.string.isRequired,
    })),
};

export default Services;