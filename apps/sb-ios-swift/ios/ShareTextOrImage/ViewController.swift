//
//  ViewController.swift
//  ShareTextOrImage
//
//  Created by ProgrammingWithSwift on 2019/12/24.
//  Copyright © 2019 ProgrammingWithSwift. All rights reserved.
//

import UIKit
import React

class ViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    override func viewDidAppear(_ animated: Bool) {
        // self.present(activityViewController, animated: true)
    }
    
    @IBAction func shareButtonTapped(sender: UIButton) {
        let activityViewController = self.share(
            items: [
                "https://www.betsson.gr",
                UIImage(imageLiteralResourceName: "testImage"),
                URL(string: "https://www.betsafe.com")!
            ],
            ipad: (true, self.view)
        )
        
        self.present(activityViewController, animated: true)
    }
    
    @IBAction func highScoreButtonTapped(sender : UIButton) {
        NSLog("Hello")
        //let jsBundleLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")!
        let jsBundleLocation = Bundle.main.url(forResource: "main", withExtension: "jsbundle")!
        let mockData:NSDictionary = ["scores":
          [
              ["name":"Alex", "value":"42"],
              ["name":"Joel", "value":"10"]
          ]
        ]

        let rootView = RCTRootView(
          bundleURL: jsBundleLocation,
          moduleName: "RNHighScores",
          initialProperties: mockData as [NSObject : AnyObject],
          launchOptions: nil
        )
        
        let vc = UIViewController()
        vc.view = rootView
        self.present(vc, animated: true, completion: nil)
    }
    
    private func share(
        items: [Any],
        excludedActivityTypes: [UIActivity.ActivityType]? = nil,
        ipad: (forIpad: Bool, view: UIView?) = (false, nil)
    ) -> UIActivityViewController {
        let activityViewController = UIActivityViewController(activityItems: items, applicationActivities: nil)
        
        if ipad.forIpad {
            activityViewController.popoverPresentationController?.sourceView = ipad.view
        }
        
        if let excludedActivityTypes = excludedActivityTypes {
            activityViewController.excludedActivityTypes = excludedActivityTypes
        }
        
        return activityViewController
    }
}

