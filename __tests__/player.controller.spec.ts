import * as PlayerController from '@/controllers/player.controller';
import { Player, PlayerState } from '@/types/Player';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

describe('PlayerController', () => {
  it('should create a new player', async () => {
    const playerObject = new Player('testPlayerName', 'testUserId');
    //PlayerState:
    // name: string;
    // lvl: number;
    // currentHp: number;
    // maxHp: number;
    // isAlive: boolean;
    // stats: CharStats;
    // userId: string;
    // exp: number;
    // expToLvlUp: number;
    // freeStatPoints: number;

    const player = await PlayerController.createPlayer(
      'testUserId',
      playerObject,
    );

    expect(player).toBeDefined();
    expect(player.getState()).toEqual(playerObject.getState());
  });
});
