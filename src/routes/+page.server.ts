import type { PageServerLoad } from './$types';

const mockDatabase = [
	{ id: '1', optionA: '짜장면', optionB: '짬뽕', votesA: 10, votesB: 20 },
	{ id: '2', optionA: '부먹', optionB: '찍먹', votesA: 30, votesB: 5 },
	{ id: '3', optionA: '콜라', optionB: '사이다', votesA: 50, votesB: 50 }
];

// 이 load 함수는 SvelteKit 서버에서만 실행됩니다.
// 이 함수가 return하는 데이터가 +page.svelte의 'data' prop으로 들어갑니다.
export const load: PageServerLoad = async () => {
	// 실제로는 여기서 DB에 접속해 데이터를 가져옵니다.
	// 지금은 가짜 데이터를 반환합니다.
	return {
		games: mockDatabase
	};
};