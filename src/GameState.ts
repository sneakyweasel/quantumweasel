export default class GameState {
	achievedGoals: boolean;
	noParticles: boolean;
	notEnoughIntensity: boolean;

	constructor() {
		this.reset();
	}

	reset(): void {
		this.achievedGoals = false;
		this.noParticles = false;
		this.notEnoughIntensity = false;
	}

	doStartNextRound(): boolean {
		return !this.noParticles;
	}

	doRestartGame(): boolean {
		return this.noParticles || this.notEnoughIntensity;
	}

	isGameOver(): boolean {
		return this.achievedGoals || this.noParticles || this.notEnoughIntensity;
	}
}
