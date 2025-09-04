import type { PageServerLoad } from './$types';
import strudelsData from '$lib/data/strudels.json';

export const load: PageServerLoad = async () => {
	return {
		strudels: strudelsData.strudels
	};
};
