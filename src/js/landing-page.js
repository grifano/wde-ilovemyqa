// Tabs Section
const refs = {
  tabsTriggers: document.querySelector('.lp-devices_tabs-triggers-list'),
  tabsTriggerButtons: document.querySelectorAll(
    '.lp-devices_tabs-trigger-button'
  ),
};

refs.tabsTriggerButtons.forEach(trigger => {
  trigger.addEventListener('click', event => {
    const currentActiveData = setActiveTrigger(trigger, 'is-active');
    setActivePane(currentActiveData);
  });
});

function setActiveTrigger(element, className) {
  // Check if element
  if (!element) {
    return;
  }

  // Clear class from all triggers
  refs.tabsTriggerButtons.forEach(button => {
    button.classList.remove(className);
  });

  // Clear current class and add active class for current trigger
  if (!element.classList.contains(className)) {
    element.classList.add(className);
    return element.dataset.devices;
  } else {
    element.classList.remove(className);
  }
}
function setActivePane(dataset) {
  const tabsPanes = document.querySelectorAll('.lp-devices_tabs-pane');

  if (!dataset && tabsPanes.length <= 0) {
    return;
  }

  tabsPanes.forEach(pane => {
    if (!pane.classList.contains('visually-hidden')) {
      pane.classList.add('visually-hidden');
    } else if (pane.dataset.devices === dataset) {
      pane.classList.remove('visually-hidden');
    }
  });
}

// Seraching device
const searchBar = document.querySelector('.lp-devices_search-input');
const resultParent = document.querySelector('.lp-devices_search-result');
const devicesDB = [
  {
    name: 'Microsoft Windows 10',
    icon: 'https://assets-global.website-files.com/5cd1f70b01918284eb975d06/6634b7aed9d6f7cb3e78b3c6_microsoft.svg',
  },
  {
    name: 'Microsoft Windows 11',
    icon: 'https://assets-global.website-files.com/5cd1f70b01918284eb975d06/6634b7aed9d6f7cb3e78b3c6_microsoft.svg',
  },
  {
    name: 'Mac OS - Sonoma',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/663a280de0ab7fd5ab87d130_mac-os.svg',
  },
  {
    name: 'Mac OS - Ventura',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/663a280de0ab7fd5ab87d130_mac-os.svg',
  },
  {
    name: 'Mac OS - Monterey',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/663a280de0ab7fd5ab87d130_mac-os.svg',
  },
  {
    name: 'Mac OS - Big Sur',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/663a280de0ab7fd5ab87d130_mac-os.svg',
  },
  {
    name: 'Mac OS - Catalina',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/663a280de0ab7fd5ab87d130_mac-os.svg',
  },
  {
    name: 'iPhone 15',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/66370d699ae2bec8b503ce35_iphone-icon.svg',
  },
  {
    name: 'iPhone 14',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/66370d699ae2bec8b503ce35_iphone-icon.svg',
  },
  {
    name: 'iPhone 14 Pro',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/66370d699ae2bec8b503ce35_iphone-icon.svg',
  },
  {
    name: 'iPhone 14 Pro Max',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/66370d699ae2bec8b503ce35_iphone-icon.svg',
  },
  {
    name: 'iPhone 13',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/66370d699ae2bec8b503ce35_iphone-icon.svg',
  },
  {
    name: 'iPhone 13 Pro',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/66370d699ae2bec8b503ce35_iphone-icon.svg',
  },
  {
    name: 'iPhone 13 Pro Max',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/66370d699ae2bec8b503ce35_iphone-icon.svg',
  },
  {
    name: 'iPhone 12 Pro Max',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/66370d699ae2bec8b503ce35_iphone-icon.svg',
  },
  {
    name: 'iPhone 12 Mini',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/66370d699ae2bec8b503ce35_iphone-icon.svg',
  },
  {
    name: 'iPhone 11',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/66370d699ae2bec8b503ce35_iphone-icon.svg',
  },
  {
    name: 'iPhone XS',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/66370d699ae2bec8b503ce35_iphone-icon.svg',
  },
  {
    name: 'iPhone 8',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/66370d699ae2bec8b503ce35_iphone-icon.svg',
  },
  {
    name: 'iPad Pro 12.9 2021',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/66370d68aba36a5a0d931c3c_ipad-icon.svg',
  },
  {
    name: 'iPad Pro 12.9 2020',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/66370d68aba36a5a0d931c3c_ipad-icon.svg',
  },
  {
    name: 'iPad Pro 11 2021',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/66370d68aba36a5a0d931c3c_ipad-icon.svg',
  },
  {
    name: 'iPad Pro 11 2020',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/66370d68aba36a5a0d931c3c_ipad-icon.svg',
  },
  {
    name: 'iPad Mini 2021',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/66370d68aba36a5a0d931c3c_ipad-icon.svg',
  },
  {
    name: 'iPad Mini 2019',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/66370d68aba36a5a0d931c3c_ipad-icon.svg',
  },
  {
    name: 'iPad 9th',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/66370d68aba36a5a0d931c3c_ipad-icon.svg',
  },
  {
    name: 'iPad 8th',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/66370d68aba36a5a0d931c3c_ipad-icon.svg',
  },
  {
    name: 'Galaxy S23',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/663a263cdd0d377e7df1db0c_android-grey.svg',
  },
  {
    name: 'Galaxy S22',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/663a263cdd0d377e7df1db0c_android-grey.svg',
  },
  {
    name: 'Galaxy S22 Ultra',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/663a263cdd0d377e7df1db0c_android-grey.svg',
  },
  {
    name: 'Galaxy S22+',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/663a263cdd0d377e7df1db0c_android-grey.svg',
  },
  {
    name: 'Galaxy S21',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/663a263cdd0d377e7df1db0c_android-grey.svg',
  },
  {
    name: 'Galaxy S21 Ultra',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/663a263cdd0d377e7df1db0c_android-grey.svg',
  },
  {
    name: 'Galaxy S21+',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/663a263cdd0d377e7df1db0c_android-grey.svg',
  },
  {
    name: 'Galaxy S10+',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/663a263cdd0d377e7df1db0c_android-grey.svg',
  },
  {
    name: 'Galaxy S9',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/663a263cdd0d377e7df1db0c_android-grey.svg',
  },
  {
    name: 'Galaxy S9+',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/663a263cdd0d377e7df1db0c_android-grey.svg',
  },
  {
    name: 'Galaxy S8',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/663a263cdd0d377e7df1db0c_android-grey.svg',
  },
  {
    name: 'Galaxy S8+',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/663a263cdd0d377e7df1db0c_android-grey.svg',
  },
  {
    name: 'Galaxy Z Fold 5',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/663a263cdd0d377e7df1db0c_android-grey.svg',
  },
  {
    name: 'Pixel 7',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/663a263cdd0d377e7df1db0c_android-grey.svg',
  },
  {
    name: 'Pixel 7 Pro',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/663a263cdd0d377e7df1db0c_android-grey.svg',
  },
  {
    name: 'Pixel 6',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/663a263cdd0d377e7df1db0c_android-grey.svg',
  },
  {
    name: 'Pixel 6 Pro',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/663a263cdd0d377e7df1db0c_android-grey.svg',
  },
  {
    name: 'Pixel 5',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/663a263cdd0d377e7df1db0c_android-grey.svg',
  },
  {
    name: 'OnePlus 9',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/663a263cdd0d377e7df1db0c_android-grey.svg',
  },
  {
    name: 'OnePlus 8',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/663a263cdd0d377e7df1db0c_android-grey.svg',
  },
  {
    name: 'OnePlus 7T',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/663a263cdd0d377e7df1db0c_android-grey.svg',
  },
  {
    name: 'OnePlus 7',
    icon: 'https://uploads-ssl.webflow.com/5cd1f70b01918284eb975d06/663a263cdd0d377e7df1db0c_android-grey.svg',
  },
];
searchBar.addEventListener('input', event => {
  if (event.target.value !== '') {
    const devicesList = onUserInput(event.target.value);
    updateUI(devicesList);
  } else {
    resultParent.innerHTML = '';
  }
});
searchBar.addEventListener('blur', event => {
  // Hide the result list when the input loses focus
  resultParent.innerHTML = '';
});

function onUserInput(value) {
  const searchRequestValue = toLower(value);
  if (!searchRequestValue.trim()) {
    return []; // Return an empty array if the input is empty or whitespace
  }
  let regex = new RegExp(
    searchRequestValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
    'i'
  );
  return devicesDB.filter(device => {
    const convertedForComparison = toLower(device.name);
    return regex.test(convertedForComparison);
  });
}
function updateUI(devicesList) {
  if (devicesList.length > 0) {
    const markupListItems = devicesList
      .map(device => {
        return `<li class="lp-devices_search-result-list-item">
        <a class="lp-devices_search-result-link">
        <img src="${device.icon}">
        <p>${device.name}</p>
        </a>
        </li>`;
      })
      .join('');
    const markupList = `<ul class="lp-devices_search-result-list">${markupListItems}</ul>`;
    resultParent.innerHTML = '';
    resultParent.insertAdjacentHTML('afterbegin', markupList);
  }
  return;
}
function toLower(string) {
  return string.toLowerCase();
}
