import { describe, it, expect } from 'vitest';
import {hashPassword,comparePassword} from '../../../src/utils/password.util' 

describe('password utils test suite', async ()=>{
    const password1= "ClaveUno123!";
    const password2= "ClaveDos456!";

    const hash1= await hashPassword(password1);
    const hash2= await hashPassword(password2);

    it('should generate hashes that are different for the original passwords', ()=>{
        expect(typeof(hash1)).toBe('string');
        expect(hash1.length).toBeGreaterThan(0);
        expect(hash1!=password1).toBe(true);
    })
    it('should return true for correct password', async ()=>{
        expect(await comparePassword(password1,hash1)).toBe(true);
        expect(await comparePassword(password2,hash2)).toBe(true);
    })
    it('should return false for incorrect password', async ()=>{
        expect(await comparePassword(password2,hash1)).toBe(false);
        expect(await comparePassword(password1,hash2)).toBe(false);
    })
})