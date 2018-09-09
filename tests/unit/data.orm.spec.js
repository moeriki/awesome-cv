import data from '@/data';

describe('data', () => {
  const {
    experience: { clients, employers, skills, projects },
  } = data;

  describe('projects', () => {
    describe.each(Object.entries(projects))('%s', (key, project) => {
      it('should have a valid clientId', () => {
        expect(clients).toHaveProperty(project.clientId);
      });

      it('should have a valid employerId', () => {
        expect(employers).toHaveProperty(project.employerId);
      });
    });
  });

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
