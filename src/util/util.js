const blurbNames = {
  'Wait on Underwriting': 'Underwriting',
  'Review Installation Date': 'Installation Date Scheduled',
}

const descriptionLines = {
  'Underwriting': {
      "completed": 'Underwriting is completed',
      "current": 'Underwriting is in progress',
      "suspended": 'Underwriting is suspended',
  },
  'Send Merchant And Dealer Confirmation Link': {
      "completed": 'Send Merchant And Dealer Confirmation Link is completed',
      "current": 'Send Merchant And Dealer Confirmation Link is in progress',
      "suspended": 'Send Merchant And Dealer Confirmation Link is suspended',
  },
  'Merchant Confirmation Form': {
      "completed": 'Merchant Confirmation Form is completed',
      "current": 'Merchant Confirmation Form is in progress',
      "suspended": 'Merchant Confirmation Form is suspended',
  },
  'Review Confirmation Form & Programming': {
      "completed": 'Review Confirmation Form & Programming is completed',
      "current": 'Review Confirmation Form & Programming is in progress',
      "suspended": 'Review Confirmation Form & Programming is suspended',
  },
  'Installation Date Scheduled': {
      "completed": 'Installation Date Scheduled is completed',
      "current": 'Installation Date Scheduled is in progress',
      "suspended": 'Installation Date Scheduled is suspended',
  },
  'Assign Technician': {
      "completed": 'Assign Technician is completed',
      "current": 'Assign Technician is in progress',
      "suspended": 'Assign Technician is suspended',
  },
  'Complete Installation': {
      "completed": 'Complete Installation is completed',
      "current": 'Complete Installation is in progress',
      "suspended": 'Complete Installation is suspended',
  },
  'Deployment': {
      "completed": 'Deployment is completed',
      "current": 'Deployment is in progress',
      "suspended": 'Deployment is suspended',
  },
  'Ship Equipment': {
      "completed": 'Ship Equipment is completed',
      "current": 'Ship Equipment is in progress',
      "suspended": 'Ship Equipment is suspended',
  },
}

export const formatData = data => {

  data = data.sort((a, b) => a.Index - b.Index).map(step => {

      let Blurb = JSON.parse(step.Blurb)
          .sort((a, b) => a.SequenceIndex - b.SequenceIndex);

      Blurb = Blurb.map((blurb) => {
          if(Blurb.filter(b => b.SequenceIndex === blurb.SequenceIndex).length > 1) {
              const sameTasks = Blurb.filter(b => b.SequenceIndex === blurb.SequenceIndex);
              let result = sameTasks[0];
              sameTasks.forEach((b, index) => {
                  if(index > 0) {
                      result.Name = `${result.Name} & ${b.Name}`;
                      result.IsCurrent = result.IsCurrent || b.IsCurrent;
                      result.IsComplete = result.IsComplete && b.IsComplete;
                      result.isSuspended = result.isSuspended || b.isSuspended;
                  }
                  delete Blurb[Blurb.findIndex(bl => JSON.stringify(bl) === JSON.stringify(b))];
              })
              blurb = result;
          }else {
              blurb = {
                  Name: blurbNames[blurb.Name] || blurb.Name,
                  IsCurrent: blurb.IsCurrent,
                  IsComplete: blurb.IsComplete,
                  isSuspended: blurb.isSuspended
              };
          }

          let description = '';
          if(descriptionLines[blurb.Name]){
              description = descriptionLines[blurb.Name][blurb.IsComplete ? 'completed' : blurb.isSuspended ? 'suspended' : blurb.IsCurrent ? 'current' : ''];
          }
          return{
              ...blurb,
              description: description
          }
      });

      return Blurb;
  });

  return [].concat.apply([], data);
}

