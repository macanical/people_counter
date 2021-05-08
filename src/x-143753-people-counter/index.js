import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import '@servicenow/now-button';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	const {peopleCount} = state;
	return (
		<div>
			<h1>People Counter</h1>
			<div><h1>{peopleCount}</h1></div>
			<span>
				<now-button label="+1" icon="" tooltipContent="Add one person to the count" variant="primary-positive" size="lg" configAria={{}} on-click={ () =>
					updateState({peopleCount: (peopleCount + 1)})
				}>
				</now-button>
			</span>
			<span>
				<now-button label="-1" icon="" tooltipContent="Remove one person from the count" variant="primary-positive" size="lg" configAria={{}} on-click={ () =>
					updateState({peopleCount: Math.max(0, peopleCount - 1)})
				}>
				</now-button>
			</span>
			<span>
				<now-button label="Clear" icon="" tooltipContent="Clear the current count" variant="primary-negative" size="lg" configAria={{}} on-click={ () => 
					updateState({peopleCount: 0})
				}>
				</now-button>
			</span>
		</div>
	);
};

createCustomElement('x-143753-people-counter', {
	renderer: {type: snabbdom},
	view,
	styles,
	initialState: {
		peopleCount: 0
	}
});
