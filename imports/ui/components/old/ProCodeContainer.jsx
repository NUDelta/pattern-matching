import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ProExamples from '../../../api/ProExamples/ProExamples.js';
import Annotations from '../../../api/Annotations/Annotations.js';
import ProCode from './ProCode.jsx';



export default createContainer((params) => {
	const proExamplesHandle = Meteor.subscribe('ProExamples.public');
	const annotationsHandle = Meteor.subscribe('Annotations.public');

	const proExampleId = params.proExampleId;
	const annotationId = params.annotationId;

	return {
		connected: Meteor.status().connected,
		proExample: ProExamples.findOne(proExampleId),
		annotation: Annotations.findOne(annotationId)
	}
}, ProCode);