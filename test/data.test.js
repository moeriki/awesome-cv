import data from '../src/data';

describe('data', () => {
  const {
    experience: { skills },
  } = data;

  describe('skills', () => {
    describe.each(Object.entries(skills))('%s', (key, skill) => {
      if (skill.legacy === true) {
        it('should have no score', () => {
          expect(skill).not.toHaveProperty('score');
        });
      } else {
        it('should have a score', () => {
          expect(skill).toHaveProperty('score', expect.any(Number));
        });
      }

      if (skill.parent) {
        it('should have an existing parent', () => {
          expect(data.experience).toHaveProperty(skill.parent);
        });
      }

      if (skill.score != null && skill.score > 0) {
        it('should have a score greater than 5', () => {
          expect(skill.score).toBeGreaterThanOrEqual(5);
        });
      }
    });
  });
});
