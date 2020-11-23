const size = {
	mobileS: '500px',
	mobileL: '600px',
	tablet: '768px',
	desktop: '850px'
};

const device = {
	mobileS: `(min-height: ${size.mobileS}) and (max-height: ${size.mobileL})`,
	mobileL: `(min-height: ${size.mobileL}) and (max-height: ${size.tablet})`,
	tablet: `(min-height: ${size.tablet}) and (max-height: ${size.desktop})`,
	desktop: `(min-height: ${size.desktop})`
};

export default device;
